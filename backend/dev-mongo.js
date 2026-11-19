/**
 * Local dev launcher: starts an in-memory MongoDB instance so the app can run
 * without an external database, then boots the Express server.
 *
 * Usage: node dev-mongo.js
 */
const { MongoMemoryServer } = require('mongodb-memory-server');

(async () => {
  const mongo = await MongoMemoryServer.create({
    instance: { port: 27017, dbName: 'medscan-ai' },
  });

  process.env.MONGODB_URI = mongo.getUri('medscan-ai');
  console.log(`[dev] In-memory MongoDB ready at ${process.env.MONGODB_URI}`);

  require('./server');
})();
