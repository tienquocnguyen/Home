import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";
import "typeface-roboto";

const imgfood = require("../San_Jose.jpg");
const divStyle = {
  width: "100%",
  height: "772px",
  // backgroundImage: `url(${imgfood})`,
  // backgroundSize: "cover",
  marginTop: "-45px"
};
const headerStyle = {
  padding: "90px",
  color: "blue",
  fontSize: "80px",
  fontWeight: "normal",
  fontFamily: "roboto"
};
const paraStyle = {
  padding: "90px",
  color: "black",
  fontWeight: "normal",
  fontFamily: "roboto",
  marginBottom: "0px"
};
const buttonStyle = {
  marginTop: "0px",
  fontSize: "20px",
  padding: "10px",
  color: "B6D4F9",
  fontWeight: "normal"
};
const container = {
  position: 'relative',
  align: 'center',
  color: 'white'
};
const centered = {
  position: 'absolute',
    top: '50%',
    left: '50%',
  // padding: "90px",
  color: "white",
  fontSize: "80px",
  fontWeight: "normal",
  fontFamily: "roboto",
  transform: 'translate(-50%, -50%)'
}

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div style={container}>
      <img src={imgfood} alt="San Jose Photo" width= '100%' height = '500'/>
      <div style={centered}>H.O.M.E.</div>
      </div>
      <div className="welcomponent" style={divStyle}>
        {/* <h1 align="center" style={headerStyle}>
          H.O.M.E.
        </h1> */}
        <h2 align="center" style={paraStyle}>
          Welcome to H.O.M.E. - Helping Other Members of Earth. <br />
          Signup to be a donator, hotel, or shelter today!
        </h2>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/login"
            style={buttonStyle}
          >
            Login/Register
          </Button>
          </CardActions>
          <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="inherit"
            component={Link}
            to="/donate"
            style={buttonStyle}
          >
            Make a Donation
          </Button>
        </CardActions>
      </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
