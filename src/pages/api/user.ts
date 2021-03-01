import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../connectors/DatabaseConnector";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const access_token = req.cookies.access_token;

  if (access_token) {
    const user = (await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `bearer ${access_token}`
      }
    })).data;

    if (user.login) {
      const {db, client} = await connectToDatabase();

      if (client.isConnected()) {
        let data = await db.collection('users').findOne({login: user.login});
        data = {...data, avatar_url: user.avatar_url, name: user.name};

        return res.send(data);
      }
    }
  }

  return res.status(401).send({error: 'not logged'});
}