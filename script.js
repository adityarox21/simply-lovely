// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD14DMWfrCbIjkXPEpdVPdHbXFZWFhO94U",
  authDomain: "simply-lovely-a4f95.firebaseapp.com",
  databaseURL: "https://simply-lovely-a4f95-default-rtdb.firebaseio.com",
  projectId: "simply-lovely-a4f95",
  storageBucket: "simply-lovely-a4f95.appspot.com",
  messagingSenderId: "408497495837",
  appId: "1:408497495837:web:26317ffa85861f4cc18bf4",
  measurementId: "G-H2RMCYSEPZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("wishForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (name && message) {
    const newWish = db.ref("wishes").push();
    newWish.set({
      name: name,
      message: message,
      timestamp: Date.now()
    });

    alert("🎈 Your wish was sent!");
    document.getElementById("wishForm").reset();
  } else {
    alert("Please fill out both fields.");
  }
});
