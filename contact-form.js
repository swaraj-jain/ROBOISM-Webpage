
var firebaseConfig = {
  apiKey: "AIzaSyB-wor5PlXNxzeu642QSvpmXDvwM6zJ6kc",
  authDomain: "contact-form-website-60659.firebaseapp.com",
  databaseURL: "https://contact-form-website-60659.firebaseio.com",
  projectId: "contact-form-website-60659",
  storageBucket: "contact-form-website-60659.appspot.com",
  messagingSenderId: "126610306700",
  appId: "1:126610306700:web:537bc7a46d6f526877ada9"
};

firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const submitButton = document.querySelector("#contact-submit");

let userEmail = document.querySelector("#userEmail");
let userMessage = document.querySelector("#userMessage");


const db = firestore.collection("roboism-contact-form");



submitButton.addEventListener("click",function(){
let userEmailInput = userEmail.value;
let userMessageInput = userMessage.value;


//Access the database collection
db.doc().set({
  Email : userEmailInput,
  Message :userMessageInput
}).then(function(){
  console.log("Message Sent");
}).catch(function(error){
  console.log(error)
});

userEmail.value = "";
userMessage.value = "";


});

