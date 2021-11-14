const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URL;

const insertDB = async (body) => {
  // Always await the connection to the client,
  // otherwise it might connect slowly and you'll never fetch the document
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    throw {
      status: 500,
      message: "error connecting to mongo client",
    };
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db(process.env.DB_NAME);

    let collection = db.collection(process.env.COLLECTION_NAME);

    await collection.insertOne(body);
  } catch (err) {
    throw {
      status: 500,
      message: "error in inserting document in mongo",
    };
  } finally {
    client.close();
  }
};

const fetchDB = async (query) => {
  // Always await the connection to the client,
  // otherwise it might connect slowly and you'll never fetch the document
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    throw {
      status: 500,
      message: "error connecting to mongo client",
    };
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db(process.env.DB_NAME);

    let collection = db.collection(process.env.COLLECTION_NAME);

    return await collection.findOne(query);
  } catch (err) {
    throw {
      status: 500,
      message: "error in finding document in mongo",
    };
  } finally {
    client.close();
  }
};

const deleteDB = async (query) => {
  // Always await the connection to the client,
  // otherwise it might connect slowly and you'll never fetch the document
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    throw {
      status: 500,
      message: "error connecting to mongo client",
    };
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db(process.env.DB_NAME);

    let collection = db.collection(process.env.COLLECTION_NAME);

    return await collection.deleteOne(query);
  } catch (err) {
    throw {
      status: 500,
      message: "error in finding document in mongo",
    };
  } finally {
    client.close();
  }
};

const updateDB = async (query, body) => {
  // Always await the connection to the client,
  // otherwise it might connect slowly and you'll never fetch the document
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
  }).catch((err) => {
    throw {
      status: 500,
      message: "error connecting to mongo client",
    };
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db(process.env.DB_NAME);

    let collection = db.collection(process.env.COLLECTION_NAME);

    return await collection.updateOne(query, { $set: body });
  } catch (err) {
    throw {
      status: 500,
      message: "error in finding document in mongo",
    };
  } finally {
    client.close();
  }
};

module.exports = {
  insertDB,
  fetchDB,
  deleteDB,
  updateDB,
};
