var firebaseConfig = {
    apiKey: "AIzaSyD8ges973srI_nNG_KR3hLNhy7thtzSeaE",
    authDomain: "project-94-a30fc.firebaseapp.com",
    databaseURL: "https://project-94-a30fc-default-rtdb.firebaseio.com",
    projectId: "project-94-a30fc",
    storageBucket: "project-94-a30fc.appspot.com",
    messagingSenderId: "294450178234",
    appId: "1:294450178234:web:c0447509f48a3358b3fa83"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    window.location = "kwitter_room.html";
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "Adding user"
    });

    window.location = "kwitter_room.html";
}