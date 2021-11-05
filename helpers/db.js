const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URL;

const insertDB = (body) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    let dbo = db.db(process.env.DB_NAME);
    dbo
      .collection(process.env.COLLECTION_NAME)
      .insertOne(body, function (err, res) {
        if (err) throw err;
        console.log(`Inserted document: ${body}`);
        db.close();
      });
  });
};

module.exports = {
  insertDB,
};
