
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCkAI15vIMKh8XCUZ25p1j0-9bKt8P_NGA",
      authDomain: "let-s-chat-app-951fe.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-951fe-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-951fe",
      storageBucket: "let-s-chat-app-951fe.appspot.com",
      messagingSenderId: "747206148851",
      appId: "1:747206148851:web:c299e007e1e5bf5b3b2d86"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class = 'room_name' id=" + Room_names + " onclick ='redirect(this.id)'> #" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function rediectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}