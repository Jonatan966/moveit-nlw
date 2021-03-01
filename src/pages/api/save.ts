import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../connectors/DatabaseConnector";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {access_token, level, currentExperience, challengesCompleted} = req.body;

  if (access_token) {
    const {db, client} = await connectToDatabase();

    if (client.isConnected()) {
      try {
        const user = (await axios.get('https://api.github.com/user', {
          headers: {
            Authorization: `bearer ${access_token}`
          }
        })).data;

        if (user.login) {
          const eba = await db.collection('users').updateOne({login: user.login}, {
            $set: {level, currentExperience, challengesCompleted}
          });
          
          return res.send({ok: true});
        }  
      }
      catch {
        return res.status(401).send({error: 'not logged'});
      }
    }
  }

  return res.status(401).send({error: 'not logged'});
}