var firebaseConfig = {
      apiKey: "AIzaSyBbmF8XIhFWOd-ARH1BCWmMlvNPLt1yCLs",
      authDomain: "let-s-web-app.firebaseapp.com",
      projectId: "let-s-web-app",
      storageBucket: "let-s-web-app.appspot.com",
      messagingSenderId: "347303121958",
      appId: "1:347303121958:web:162195295ca0f37fad42e7"
    };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });
     localStorage.setItem("Roomname",room_name);
     window.location = "kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}