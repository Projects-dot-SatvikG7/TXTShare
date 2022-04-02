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
  getDoc,
  serverTimestamp,
  updateDoc,
  doc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",
  authDomain: "txt-share.firebaseapp.com",
  databaseURL:
    "https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "txt-share",
  storageBucket: "txt-share.appspot.com",
  messagingSenderId: "802040092553",
  appId: "1:802040092553:web:47c61f164c8dc5fc39b358",
  measurementId: "G-9X5YRQBBYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth(app);

const fetchData = async (user) => {
  // console.log(user)
  const docRef = doc(db, "texts", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    $("#data").html(docSnap.data().data).show();
  } else {
    const newDocRef = doc(db, 'texts', user.uid);
    setDoc(newDocRef, { data: "No text data available" }, { merge: true });
    $("#data").html("No text data available, add new data from the below textbox").show();
  }
}

const replaceDocData = async () => {
  const newData = $("#newData").val();
    updateDoc(doc(db, 'texts', auth.currentUser.uid), { data: newData });
    $("#data").html(newData).show();
} 

$(function () {
  $("#si").hide();
  $("#so").show();
  $("#sob").hide();
  $("#sib").show();
  $("#profile_pic").hide();
  $("#ud").html("");
  $("#data").hide();
  onAuthStateChanged(auth, (user) => {
    // console.log("changed")
    if (user) {
    // console.log("changed")
      fetchData(user);
      $("#si").show();
      $("#so").hide();
      $("#sob").show();
      $("#sib").hide();
      $("#profile_pic").attr("src", user.photoURL);
      $("#profile_pic").show();

      $("#ud").html(`
                    <h3>Hello ${user.displayName}!</h3>
                    <p>User ID: ${user.uid}</p>
                    <p>User Email: ${user.email}</p>
                    `);
    } else {
      $("#si").hide();
      $("#so").show();
      $("#sob").hide();
      $("#sib").show();
      $("#profile_pic").hide();
      $("#ud").html("");
    }
  });
  $("#sib").click(function(){
    signInWithPopup(auth, provider);
  });
  $("#sob").click(function(){
    signOut(auth);
  });
  // addData workflow
  $("#addData").click(function(){
    replaceDocData();
  })
});

