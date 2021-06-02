var firebaseconfig={apiKey: "AIzaSyDAP80fa4j0abnhDWcLj07Jo9ayhmF3RZw",
authDomain: "class-94-32630.firebaseapp.com",
projectId: "class-94-32630",
storageBucket: "class-94-32630.appspot.com",
messagingSenderId: "698826182460",
appId: "1:698826182460:web:fb5fcf2061cd81809ed839",
measurementId: "G-LQX85JCTYK",
databaseURL:"https://class-93-c03a8-default-rtdb.firebaseio.com/"

};

firebase.initializeApp(firebaseconfig);

user_name=localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


function addRoom()
{
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name",room_name);
window.location=("kwitter_room.html");

}


function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}



function send()
{

msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message=msg,
      like:0,
});

document.getElementById("msg").value="";




}
