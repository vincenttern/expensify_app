import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];

//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Gym Bill",
//   note: "January Gym Bill",
//   amount: 232,
//   createdAt: 233
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChage = database.ref().on(
//   "value",
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log("Error with data fecthing", e);
//   }
// );
// setTimeout(() => {
//   database.ref("age").set(28);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChage);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log("Error fecting data", e);
//   });
// database
//   .ref()
//   .set({
//     name: "Vincent Tern",
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     location: {
//       city: "Sacramento",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("age").set(27);
// database.ref("location/city").set("Oakland");

// database
//   .ref("attributes")
//   .set({
//     height: 72,
//     weight: 185
//   })
//   .then(() => {
//     console.log("New data was saved!");
//   })
//   .catch(e => {
//     console.log("New data save failed.", e);
//   });

// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("Successfully removed item");
//   })
//   .catch(e => {
//     console.log("Unsucessful remove item.", e);
//   });

// console.log("I made a request to change the data.");
