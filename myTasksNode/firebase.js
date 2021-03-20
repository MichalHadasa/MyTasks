const firebase = require("firebase-admin");

const credentials = require("./middelwares/credentials.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://tasks-b0ef4.firebaseio.com",
});

module.exports = firebase;

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});