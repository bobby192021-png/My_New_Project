// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
// import { getMessaging } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyDn4EmofbeinYmQVhK4pQl1nBIOEyoSfe8",
//   authDomain: "fir-authentication-35e4c.firebaseapp.com",
//   projectId: "fir-authentication-35e4c",
//   storageBucket: "fir-authentication-35e4c.firebasestorage.app",
//   messagingSenderId: "424328615547",
//   appId: "1:424328615547:web:7d4f5e4a9e6f194f1434de",
//   measurementId: "G-6M35HHXDV4"
// };


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
//  onAuthStateChanged (auth,async(user)=>{
//     if(user){
//         const data={
//             name:user?.displayName,
//             email:user?.email,
//             profile:user?.photoURL
//         }
//         console.log(data,'data')

//         const token = await requestPermission();

//         console.log("Saved token",token)
//     }else{
//         console.log("user not loggined ")
//     }
// })
// // console.log("the data",auth)
// export const googleProvider = new GoogleAuthProvider()
// export const messaging = getMessaging(app)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDn4EmofbeinYmQVhK4pQl1nBIOEyoSfe8",
  authDomain: "fir-authentication-35e4c.firebaseapp.com",
  projectId: "fir-authentication-35e4c",
  storageBucket: "fir-authentication-35e4c.firebasestorage.app",
  messagingSenderId: "424328615547",
  appId: "1:424328615547:web:7d4f5e4a9e6f194f1434de",
  measurementId: "G-6M35HHXDV4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

onAuthStateChanged(auth,async(user)=>{
    if(user){
        const data={
            name:user?.displayName,
            email:user?.email,
            profile:user?.photoURL
        }
        console.log("user Loggined",data)
    }else{
        console.log("Something wrong")
    }
})

export const googleProvider = new GoogleAuthProvider();
