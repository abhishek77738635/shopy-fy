 
import React, { Component } from "react";
import "./login.css";




class App extends Component {

  handleSubmit = e => {

    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

    e.preventDefault();
    this.props.history.push("/shop");
    // console.log(window);
    // console.log(e.target.email.value);
    // const history = useHistory();
    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "abhishek.samari1211@gmail.com" &&
      e.target.password.value === "123456"
    ) {
      window.location.reload(true);
      // alert("Successfully logged in")
      // <Link to='/shop'>  </Link>
      // vr = true;
      // <Redirect to="/error-page" />
      
      // browserHistory.push('/shop');
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();
    alert("Goes to registration page");
  };
   
  render() {
  console.log(this.props);
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </div>
       <button className="primary">LOGIN</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          NEW USER? CLICK HERE TO SIGNUP
        </button>
      </div>
    );
  }
}

export default App;



