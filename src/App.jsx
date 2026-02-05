import React, { useEffect } from "react";
import "./App.css";
import "./App.scss";
import Routing from "./Routes";
import { toast } from "sonner";
import { firebaseCloudMessaging } from "./firebaseConfiguration/notification";
import { ToastContainer } from "react-toastify";
// import { useNavigate } from "react-router-dom";
const App = () => {
  useEffect(() => {
    async function setToken() {
      try {
        const fcmToken = await firebaseCloudMessaging.init();
        if (fcmToken) {
        }
      } catch (error) {
        console.error(error);
      }
    }
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        try {
          event?.source?.postMessage("Hi client");
          console.info("event for the service worker", event);

          return toast(
            <div style={{ height: "100%" }}>
              <div
                role="button"
                tabIndex={0}
                style={{ color: "#820000", cursor: "pointer" }}
                // onClick={() => navigate("/recieved-notifications")}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter" || e.key === " ") {
                //     navigate("/recieved-notifications");
                //   }
                // }}
              >
                {event?.data?.notification?.title || ""}
              </div>
              <div
                role="button"
                tabIndex={0}
                style={{ color: "#1d1d1d", paddingTop: "10px", cursor: "pointer" }}
                // onClick={() => navigate("/recieved-notifications")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    // navigate("/recieved-notifications");
                  }
                }}
              >
                {event?.data?.notification?.body || ""}
              </div>
            </div>
          );
        } catch (e) {
          console.error(e, "error");
          return e;
        }
      });
    }

    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "notifications" })
        .then(function (notificationPerm) {
          notificationPerm.onchange = function () {
            if (notificationPerm.state === "granted") {
              setToken();
              if (window) {
                window.location.reload();
              }
            }
          };
        });
    }
    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener("message", (e) =>
          console.info(e)
        );
      }
    };
  }, []);
  return (
    <>
    <ToastContainer/>
      <Routing />
    </>
  )
  
};

export default App;
