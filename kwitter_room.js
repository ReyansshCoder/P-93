var firebaseConfig = {
    apiKey: "AIzaSyCzYeUcAuRg5W_dBGs2i_F5fdsyFwG0cB4",
    authDomain: "kwitter-6b654.firebaseapp.com",
    databaseURL:"https://kwitter-6b654-default-rtdb.firebaseio.com",
    projectId: "kwitter-6b654",
    storageBucket: "kwitter-6b654.appspot.com",
    messagingSenderId: "123757630340",
    appId: "1:123757630340:web:dd1ed3fdb2d6dd2c1b03d1"
  };

  firebase.initializeApp(firebaseConfig);
  
  user_name= localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="WELcome " + user_name;
  
  function Add_room(){
  room_name=document.getElementById("room_name"). value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
  });
  
  localStorage.setItem("room_name",room_name);
  
  window.location="chat.html";
  
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("room name : " + Room_names);
z="<div class='room_name' id="+Room_names+" onclick='redirect_me(this.id)' >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=z;      
});});}
getData();

function redirect_me(core){
      console.log(core);
      localStorage.setItem("room_name",core);
      window.location="chat.html";
}




function Logout() {
      window.location = "index.html";
}