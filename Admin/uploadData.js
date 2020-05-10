const firestoreService = require("firestore-export-import");
const serviceAccount = require("./firebase-dingo.json");

const databaseURL="https://dingo-2314.firebaseio.com"
firestoreService.initializeApp(serviceAccount,databaseURL);
firestoreService.restore("database.json");