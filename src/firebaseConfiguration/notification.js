// import { getToken } from "firebase/messaging";
// import { messaging } from "./confi";




// export const requestPermission = async () => {
//     const permission = await Notification.requestPermission();

//     if(permission === "granted"){
//         const token  = await getToken(messaging,{
//             vapidKey:"BEs5_V3b4Uid6ElnlE01zadXgjH28NFipgNSsrRHLwJUf7RJuZzq4CwoQMptDnelihmtTV4aCQ1rQWJk7yW4x6g"
//         })

//         console.log("FCM token: ",token)
        
//     }else{
//         console.log("Notification permission denied")
//     }
// };



7
import { getMessaging, getToken } from "firebase/messaging";
// import { getFromStorage, setToStorage } from "../helpers/storage";
import { app } from "./config";

const firebaseCloudMessaging = {
  // eslint-disable-next-line consistent-return
  init: async () => {
    try {
      const messaging = getMessaging(app);
    //   const tokenInLocalForage = await getFromStorage(STORAGE_KEYS.fcmToken);

    //   if (tokenInLocalForage) {
    //     return tokenInLocalForage;
    //   }

      const status = await Notification.requestPermission();
      if (status && status === "granted") {
        const swRegistration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );
        const fcm_token = await getToken(messaging, {
          vapidKey:
            "BEs5_V3b4Uid6ElnlE01zadXgjH28NFipgNSsrRHLwJUf7RJuZzq4CwoQMptDnelihmtTV4aCQ1rQWJk7yW4x6g",
          serviceWorkerRegistration: swRegistration,
        });
console.log(fcm_token,'fcm_token')
        if (fcm_token) {
        //   setToStorage(STORAGE_KEYS.fcmToken, fcm_token);
          return fcm_token;
        }
      } else {
        console.warn("Notification permission not granted.");
        return null;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
    // }
  },
};

export { firebaseCloudMessaging };