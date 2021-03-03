import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../connectors/DatabaseConnector";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {client, db} = await connectToDatabase();

  if (client.isConnected()) {
    if (req.method === 'GET') {
      const challenges = await db.collection('challenges').find().toArray();

      if (challenges.length) {
        const challengeIndex = Math.floor(Math.random() * challenges.length);
        return res.send(challenges[challengeIndex]);
      }

      return res.send({no_results: true});
    }  
    else if (req.method === 'POST') {
      const {type, description, amount} = req.body;

      if (type && description && amount) {
        const status = await db.collection('challenges').insertOne({
          type,
          description,
          amount
        });

        return res.send({ok: !!status.insertedCount});
      }
    }
  }

  return res.redirect('/?error=bad_request');
}