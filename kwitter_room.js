const firebaseConfig = {
      apiKey: "AIzaSyAFUzf3PH--X7IXNK1y75e5RveVVp8e7Gk",
      authDomain: "kwitter-a3452.firebaseapp.com",
      projectId: "kwitter-a3452",
      storageBucket: "kwitter-a3452.appspot.com",
      messagingSenderId: "261141942291",
      appId: "1:261141942291:web:50089a0e231444aa90afe6"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
