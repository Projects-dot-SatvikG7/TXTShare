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
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDg0ZCjvAPZ4KhQik6S2ubKhkF5TnkHK30",
    authDomain: "txt-share.firebaseapp.com",
    databaseURL: "https://txt-share-default-rtdb.asia-southeast1.firebasedatabase.app",
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
    const docRef = doc(db, "texts", user.uid);
    setDoc(docRef, { id: user.uid }, { merge: true })
    const docSnap = await getDoc(docRef);
    const TNC = `By using the app you accept the <a style="background: black;" href="/privacypolicy.html">Privacy Policy</a>.`;
    if (docSnap.data().data) {
        $("#data").html(docSnap.data().data).show();
    } else {
        setDoc(docRef, { data: TNC }, { merge: true });
        $("#data")
            .html(TNC)
            .show();
    }

};

const replaceDocData = async () => {
    const newData = $("#newData").val();
    $("#newData").val("")
    updateDoc(doc(db, "texts", auth.currentUser.uid), { data: newData }, { merge: true });
    $("#data").html(newData).show();
};

$(function () {
    $("#sob", "#profile_pic", "#ud").hide();
    $("#sib").show();
    $("#data").html("Fetching...")

    onAuthStateChanged(auth, (user) => {
        if (user) {
            fetchData(user);
            $("#si").removeAttr("hidden");
            $("#so").attr("hidden", true);

            $("#ud").html(`
                    <h3>Hello ${user.displayName}!</h3>
                    <p>User ID: ${user.uid}</p>
                    <p>User Email: ${user.email}</p>
                    `);
            $("#profile_pic").attr("src", user.photoURL);
            $("#profile_pic").show();
            $("#sib").hide();
            $("#sob").show();
            $("#ud").show();

        } else {
            $("#so").removeAttr("hidden");
            $("#si").attr("hidden", true);
            $("#sob").hide();
            $("#sib").show();
            $("#profile_pic").hide();
            $("#sob", "#profile_pic", "#data", "#ud").hide();
        }
        $("#loader").hide();
    });

    $("#sib").click(function () {
        signInWithPopup(auth, provider);
    });
    $("#sob").click(function () {
        signOut(auth);
    });
    $("#addData").click(function () {
        if (!$("#newData").val()) {
            window.alert("Data cannot be empty");
            return
        }
        replaceDocData();
    });
});