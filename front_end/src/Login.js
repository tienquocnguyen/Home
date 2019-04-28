import React, { Component } from 'react';
import firebase from './Firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      address: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      console.log(error);
    });
    firebase.firestore().collection("users").add({
      name: this.state.name,
      email: this.state.email,
      status: 0,
      role: 'donator',
      payments: [
        {
          original: 0,
          difference: 0
        }
      ],
      percentages: {
        shelter: 0,
        food: 0,
        clothes: 0,
    }})
  }

  signupHotel(e){
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    firebase.firestore().collection("users").add({
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      numberOfRooms: 0,
      role: 'hotel'
    })
    .catch((error) => {
      console.log(error);
    }) 
  }
  render() {
    return (
       <div className="col-md-6">
       <form>

       <div class="form-group">
       <label for="exampleInputTien">Name</label>
       <input value={this.state.name} onChange={this.handleChange} type="text" name="name" class="form-control" id="userName" placeholder="Name" />
      </div>

      <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>


      
       <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
      <button onClick={this.signupHotel} style={{marginLeft: '25px'}} className="btn btn-success">SignupHotel</button>
 </form>
 
 </div>
    );
  }
}
export default Login;