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
  color: "black",
  fontWeight: "normal",
  fontFamily: "roboto"
};
const buttonStyle = {
  marginTop: "50px",
  fontSize: "20px",
  padding: "20px",
  color: "black",
  fontWeight: "normal"
};

class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div class="image">
      <img src={imgfood} alt="San Jose Photo" width= '100%' height = '500'/>
      </div>
      <div className="welcomponent" style={divStyle}>
        <h1 align="center" style={headerStyle}>
          H.O.M.E.
        </h1>
        <h2 align="center" style={paraStyle}>
          Welcome to H.O.M.E. - Helping Other Members of Earth. <br />
          Signup to be a donator, hotel, or shelter today!
        </h2>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/login"
            style={buttonStyle}
          >
            Login/Register
          </Button>
        </CardActions>
      </div>
      </React.Fragment>
    );
  }
}

export default Welcome;
