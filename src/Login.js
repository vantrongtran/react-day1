import React from "react";
import ReactDom from "react-dom";
import './login.css';

class Login extends React.Component {
  function validate(){

  }

  render() {
    return (
      <div id="topFeature">
        <div className="featureContents">
          <section className="loginBox">
            <section className="login ">
              <h3>ログイン</h3>
              <form  id="UserLogin">
                <div className="formBox">
                  <div className="inputBox">
                    <p className="inputArea icoInput input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope-o fa-fw"></i></span>
                    <input placeholder="メールアドレス" name="user[email]" type="text"></input></p>
                    <p className="inputArea icoInput input-group">
                      <span className="input-group-addon"><i className="fa fa-key fa-fw"></i></span>
                      <input placeholder="パスワード" name="user[password]" type="password"></input></p>
                      <p className="error"></p>
                  </div>
                  <div className="form-group">
                    <p className="btnBox"><button className="btn default medium" id="btnLogin" type="submit" name="btnConfirm">ログイン<i className="ti-arrow-circle-right icoRight"></i></button></p>
                    <p className="btnBox">
                      <a href="http://localhost:3000/signup.html" className="default mediu">新規登録</a><i className="ti-arrow-circle-right icoRight"></i>
                    </p>
                  </div>
                </div>
              </form>
            </section>
          </section>
        </div>
      </div>
    )
  }
}

export default Login;
