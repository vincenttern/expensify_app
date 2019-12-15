import React from "react";
import { connect } from "react-redux";
import { startLoginWithGoogle, startLoginWithFacebook } from "../actions/auth";

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expenses</h1>
      <p>Manage your expenses</p>

      <div className="button-box__logins">
        <button onClick={startLoginWithGoogle} className="button">
          Login with Google
        </button>
        <button onClick={startLoginWithFacebook} className="button">
          Login with Facebook
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
