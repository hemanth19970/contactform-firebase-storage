 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAJkrwywNRb1P5AXsWeiTK45cnwMMquVgg",
    authDomain: "contact-form-de1e5.firebaseapp.com",
    databaseURL: "https://contact-form-de1e5.firebaseio.com",
    projectId: "contact-form-de1e5",
    storageBucket: "contact-form-de1e5.appspot.com",
    messagingSenderId: "643025039248",
    appId: "1:643025039248:web:0945ddc7ca31a9d8b30d15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//reference contactinfo collections

let contactInfo=firebase.database().ref("infos");




document.querySelector(".contactform").addEventListener("submit",submitForm);


function submitForm(e){
    e.preventDefault();
    



    let fname=document.querySelector(".fname").value;
    let lname=document.querySelector(".lname").value;
    let email=document.querySelector(".email").value;
    console.log(fname,lname,email);

    saveContactInfo(fname,lname,email);

    document.querySelector(".contactform").reset();
    
}

//save infos to firebase

function  saveContactInfo(fname,lname,email){
    let newContactInfo=contactInfo.push();


    newContactInfo.set({
     name:fname,
     lname:lname,
     email:email, 

    });
}