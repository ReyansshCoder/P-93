
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

   function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"
   }

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
msg=document.getElementById("msg"). value ;
firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
document.getElementById("msg").value="";
}

function getData() {
   firebase.database().ref("/" + room_name).on('value', function (snapshot) {
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
       childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        
         console.log(firebase_message_id);
         console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
picture="<h4> "+name+"<img class='user_tick'></h4>";
my_msg="<h4 class='message_h4'>"+message+"</h4>";
my_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'> ";
tu="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr> ";
x=picture+my_msg+my_button+tu;
document.getElementById("output").innerHTML+=x;
 
       }
     });
   });
 }
 getData();
 
 function update_like(message_id){
console.log("click on the like button:"+message_id);
button_id=message_id;
likes=document.getElementById(button_id). value ;
up_l=Number(likes)+1;
console.log(up_l);

firebase.database().ref(room_name).child(message_id).update({like:up_l});

 }