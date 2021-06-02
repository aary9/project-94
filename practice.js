var config={apiKey: "AIzaSyDAP80fa4j0abnhDWcLj07Jo9ayhmF3RZw",
authDomain: "class-94-32630.firebaseapp.com",
projectId: "class-94-32630",
storageBucket: "class-94-32630.appspot.com",
messagingSenderId: "698826182460",
appId: "1:698826182460:web:fb5fcf2061cd81809ed839",
measurementId: "G-LQX85JCTYK",
databaseURL:"https://class-94-32630-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);





function addUser()
{
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});

}

