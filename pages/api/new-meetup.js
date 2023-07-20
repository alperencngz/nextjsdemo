import { MongoClient } from "mongodb";

// /api/new-meedup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://alperencngz:mEtqlZUJZ8Q6lB9p@cluster0.1xpjgu4.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetupsCollection");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: "Meetup created!"});
  }
}

export default handler;
