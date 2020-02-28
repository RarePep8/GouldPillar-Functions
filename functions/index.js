const functions = require('firebase-functions');
const admin = require('firebase-admin');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp(functions.config().firebase);
let db = admin.firestore();
exports.addLocation = functions.https.onRequest((req, res) => {
  res.sendStatus(200);
});

exports.getLocations = functions.https.onRequest(async (req, res) => {
    const snapshot = await db.collection('locations').get();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(snapshot.docs.map(doc => doc.data()));
});