import React, { Component } from "react";
import "./login.css";

class Login extends Component {



  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = e.target;

    // Basic validation
    if (!email.value) {
      alert("Email is required");
      return;
    }

    if (!password.value) {
      alert("Password is required");
      return;
    }

    // Store credentials in localStorage
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    // Make the login API request
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: email.value,
        password: password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        // Redirect to the shop page upon successful login
        if (json.token) {
          this.props.history.push("/shop");
          window.location.reload();
        } else {
          alert("Wrong email or password combination");
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
        alert("Something went wrong, please try again.");
      });
  };

  handleSignUpClick = e => {
    e.preventDefault();
    this.props.history.push("/register"); // Redirect to the registration page
  };

  render() {
    console.log({username:"david_r",password:"3478*#54"});
    return (
      <React.Fragment>
        <div className="containerss">
        </div>
        <div className="App">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">User Name</label>
              <input name="email" placeholder="User Name" type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button className="primary" type="submit">LOGIN</button>
          </form>
          {/* <button onClick={this.handleSignUpClick}>SIGN UP</button> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
