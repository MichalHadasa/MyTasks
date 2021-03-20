const admin = require('firebase-admin');
const serviceAccount= require('./serviceAccountKey');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://atraproject-1a786.firebaseio.com',
});
async function decodeIDToken(req, res, next) {
  console.log("hii i come to decodeIDToken")
  const header = req.headers.authorization;
  console.log("headers  "+header)
  if (header !== 'Bearer null' && req.headers.authorization.startsWith('Bearer ')) {
const idToken = req.headers.authorization.split('Bearer ')[1];
try {
  console.log("try")
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.log("err  "+err);
    }
  }
next();
}
module.exports = decodeIDToken;