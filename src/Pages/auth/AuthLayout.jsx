import React from "react";
// import "./Auth.scss";

const AuthLayout = ({ children }) => {
  return (
    <div className="authContainer">
      <div className="auth_box">
        <figure className="auth_logo">
          <img src="/static/images/logo.png" alt="bouteek Logo" />
        </figure>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
