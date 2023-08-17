var firebaseConfig = {
    apiKey: "AIzaSyAUU56iEdDggEZ0XPr6efTpzooT8GgBlpI",
    authDomain: "kwitter-project-da766.firebaseapp.com",
    databaseURL: "https://kwitter-project-da766-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-da766",
    storageBucket: "kwitter-project-da766.appspot.com",
    messagingSenderId: "1076882167987",
    appId: "1:1076882167987:web:bdc6554417cb7dd529f8c6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code

//End code
  } });  }); }
getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}