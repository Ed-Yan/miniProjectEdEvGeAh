// const userName = document.getElementById("username");
// const password = document.getElementById("password");
// const button = document.getElementById("button-style");
// let userOne = userName.value;
// let passwordOne = password.value;

// button.addEventListener("click", create);

// async function create(userOne, passwordOne) {
//   const response = await fetch(
//     "https://miniprojectedevgeah-default-rtdb.firebaseio.com/login.json",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         email: userOne,
//         password: passwordOne,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   console.log(data);
// }

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDZkIcjDzxAL0_l0JTP_wDgSx0l_3-Fn9o",
  authDomain: "miniprojectedevgeah.firebaseapp.com",
  databaseURL: "https://miniprojectedevgeah-default-rtdb.firebaseio.com",
  projectId: "miniprojectedevgeah",
  storageBucket: "miniprojectedevgeah.appspot.com",
  messagingSenderId: "945375156625",
  appId: "1:945375156625:web:a2fe34d185101bd62fa230",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.querySelector("button");
button.onclick = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(userName.value, password.value, auth)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        email: userName.value,
        password: password.value,
      })
        .then(() => {
          alert("user created");
          window.location.href = "../index.html";
        })
        .catch((error) => {
          alert("error");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  console.log("wewew");
};
