import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
import "@material-ui/core/";
import { BrowserRouter as Router } from "react-router-dom";
import firebase from './Firebase';
import BaseRouter from "./routes";
import ButtonAppBar from "./components/common/navbar";

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  } 
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  //<ButtonAppBar {...this.props}>
  //</ButtonAppBar>
  render() {
    return (
     //<div>{this.state.user ? ( <Home/>) : (<Login />)}</div>
     <div>
        <Router>
          <ButtonAppBar {...this.props}>
            <BaseRouter />
          </ButtonAppBar>
        </Router>
      </div>
      )
}
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
