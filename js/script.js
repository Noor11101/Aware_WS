// Select the <nav> element in the document
const nav = document.querySelector("nav");

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Toggle the "sticky" class based on the scroll position
    nav.classList.toggle("sticky", this.window.scrollY > 0);
});


// const form = document.querySelector("form");

// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// // const phone = document.getElementById("phone");
// const Campany = document.getElementById("Campany");
// const mess = document.getElementById("message");



// function sendEmail(){
//     const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}` ;

//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "nooralhamshari70@gmail.com",
//         Password : "29DA4EBA0A80FBCD978456E9480BED25F995",
//         To : 'nooralhamshari70@gmail.com',
//         From : "nooralhamshari70@gmail.com",
//         Subject : subject.value,
//         Body : bodyMessage
//     }).then(
//       message => {
//         if (message == "OK"){
//             Swal.fire({
//                 title: "Success!",
//                 text: "message sent successfully!",
//                 icon: "success"
//               });
//         }
//       }
//     );
// }


// function checkInput(){
//     const items = document.querySelectorAll(".item");

//     for(const item of items){
//         if (item.value ==""){
//             item.classList.add("error");
//             item.parentElement.classList.add("error");

//         }
//         item.addEventListener("keyup" , ()=>{
//             if (item.value !=""){
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");

//             }
//             else{
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail(){
//     const emailRegex = ;
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInput();

//     // sendEmail();
// });



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHZJM70hxhFsTPBGJ8qiLKIdzKifIBJUo",
//   authDomain: "aware-70.firebaseapp.com",
//   projectId: "aware-70",
//   storageBucket: "aware-70.appspot.com",
//   messagingSenderId: "238091598072",
//   appId: "1:238091598072:web:ba7074fb53c66ff388e30d",
//   measurementId: "G-YXYXL5MMR7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




