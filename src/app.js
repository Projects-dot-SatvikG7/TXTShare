// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",
  authDomain: "txt-share.firebaseapp.com",
  databaseURL:
    "https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "txt-share",
  appId: "1:802040092553:web:47c61f164c8dc5fc39b358",
  measurementId: "G-9X5YRQBBYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

const sib = document.getElementById("sib");
const sob = document.getElementById("sob");
const thumb = document.getElementById("profile_pic");
sib.onclick = () => signInWithPopup(auth, provider);
sob.onclick = () => signOut(auth);

const si = document.getElementById("si");
const so = document.getElementById("so");
const ud = document.getElementById("ud");

const data = document.getElementById("data");

const addDataBtn = document.getElementById("addData");
const newData = document.getElementById("newData");

window.addEventListener("load", async () => {
  var docRef;

  const querySnapshot = await getDocs(collection(db, "texts"));

  querySnapshot.forEach((doc) => {
    docRef = doc;
    console.log(`${doc.id} => ${doc.data().data}`);
    data.innerText = doc.data().data;
  });

  addDataBtn.addEventListener("click", async () => {
    if (!newData.value) {
      window.alert("Data cannot be empty string");
      return;
    }
    try {
      let newDocRef;
      if (!docRef) {
        newDocRef = await addDoc(collection(db, "texts"), {
          data: newData.value,
          ts: serverTimestamp(),
        });
        console.log("Document written with ID: ", newDocRef);
        location.reload();
      } else if (!!docRef) {
        newDocRef = await updateDoc(docRef.ref, {
          data: newData.value,
          ts: serverTimestamp(),
        });
        console.log("Document written with ID: ", newDocRef);
        location.reload();
      } else {
        console.log("Something went wrong");
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    si.hidden = false;
    so.hidden = true;

    sib.hidden = true;
    sob.hidden = false;
    thumb.hidden = false;
    console.log(user);
    thumb.src = user.photoURL;

    ud.innerHTML = `
                        <h3>Hello ${user.displayName}!</h3>
                        <p>User ID: ${user.uid}</p>
                        <p>User Email: ${user.email}</p>
                        
                        `;
  } else {
    si.hidden = true;
    so.hidden = false;
    sib.hidden = false;
    thumb.hidden = true;
    sob.hidden = true;
    ud.innerHTML = "";
  }
});
