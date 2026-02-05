 /* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {

    apiKey: "AIzaSyDn4EmofbeinYmQVhK4pQl1nBIOEyoSfe8",
  authDomain: "fir-authentication-35e4c.firebaseapp.com",
  projectId: "fir-authentication-35e4c",
  storageBucket: "fir-authentication-35e4c.firebasestorage.app",
  messagingSenderId: "424328615547",
  appId: "1:424328615547:web:7d4f5e4a9e6f194f1434de",
  measurementId: "G-6M35HHXDV4"
};
firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging


const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload?.notification?.title || "";
  const notificationOptions = {
    body: payload?.notification?.body || "",
    icon: "/static/logo512.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
  // new Notification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close(); // Close the notification
  // Redirect to the notifications page
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      // Check if there is already a window/tab open with the target URL
      for (let client of windowClients) {
        if (
          client.url ===
            "https://butterflystaging.appgrowthcompany.com/recieved-notifications" &&
          "focus" in client
        ) {
          return client.focus();
        }
      }
      // If not, open a new window/tab
      return clients.openWindow(
        "https://butterflystaging.appgrowthcompany.com/recieved-notifications"
      );
    })
  );
});


















