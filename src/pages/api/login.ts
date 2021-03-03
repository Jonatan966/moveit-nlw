import { connectToDatabase } from '../../connectors/DatabaseConnector';
import {NextApiRequest, NextApiResponse} from 'next';
import {serialize} from 'cookie';
import axios from 'axios';

const github_api_url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_APP_SECRET}`;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.code) {
    const userToken = (await axios.post(`${github_api_url}&code=${req.query.code}`,
    {}, { headers: {Accept: 'application/json'} }
    )).data;

    if (!userToken.error) {
      const userData = (await axios.get(`https://api.github.com/user`, {
        headers: {
          Authorization: `${userToken.token_type} ${userToken.access_token}`
        }
      })).data;
  
      if (userData) {
        const {db, client} = await connectToDatabase();

        if (client.isConnected()) {
          const userDb = (await db.collection('users').findOne({login: userData.login}));
          const cookiePath = {path: '/'};
          
          if (!userDb) {
            await db.collection('users').insertOne({
              login: userData.login,
              name: userData.name,
              level: 1,
              currentExperience: 0,
              challengesCompleted: 0
            });

            res.setHeader('Set-Cookie', [
              serialize('level', '1', cookiePath),
              serialize('currentExperience', '0', cookiePath),
              serialize('challengesCompleted', '0', cookiePath),
              serialize('access_token', userToken.access_token, cookiePath),
            ]);
          }
          else {
            res.setHeader('Set-Cookie', [
              serialize('level', userDb.level, cookiePath),
              serialize('currentExperience', userDb.currentExperience, cookiePath),
              serialize('challengesCompleted', userDb.challengesCompleted, cookiePath),
              serialize('access_token', userToken.access_token, cookiePath),
            ]);  
          }

          return res.redirect('/');
        }
      }  
    }
  }

  return res.redirect('/login?error=invalid_token');
}