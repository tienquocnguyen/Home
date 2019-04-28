import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import firebase from '../Firebase';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
		backgroundColor: '#F5F7FA'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
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
      })
  }
  render() {

	  const { classes } = this.props;

    return (
//        <div className="col-md-6">
//        <form>
//       <div class="form-group">
//        <label for="exampleInputEmail1">Email address</label>
//        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//       </div>
//        <div class="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//       </div>
//       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
//       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
//  </form>
//  </div>
 <div>
 {
   //this.props.loading ?

   //<CircularProgress className={classes.progress} />

   //:
   <main className={classes.main}>
     <CssBaseline />
     <Paper className={classes.paper}>
       <Avatar className={classes.avatar}>
         <LockOutlinedIcon />
       </Avatar>
       <Typography component="h1" variant="h5">
         Login
       </Typography>
       <form className={classes.form} onSubmit={this.handleSubmit}>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="email">Email</InputLabel>
           <Input id="email" name="email" value={this.state.email} autoFocus onChange={this.handleChange} />
         </FormControl>
         <FormControl margin="normal" required fullWidth>
           <InputLabel htmlFor="password">Password</InputLabel>
           <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
         </FormControl>
         {/* <FormControl component="fieldset">
       <FormLabel component="legend">User Type</FormLabel>
         <RadioGroup
           aria-label="position"
           name="userType"
           value={this.state.userType}
           onChange={this.handleChangeUserType}
           row
         >
            <FormControlLabel
               value="user"
               control={<Radio color="primary" />}
               label="User"
               labelPlacement="start"
            />
            <FormControlLabel
               value="hotel"
               control={<Radio color="primary" />}
               label="Hotel"
               labelPlacement="start"
            />
            <FormControlLabel
               value="shelter"
               control={<Radio color="primary" />}
               label="Shelter"
               labelPlacement="start"
            />
         </RadioGroup>
       </FormControl> */}
         <Button
           type="submit"
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           onClick={this.login}
         >
           Login
         </Button>
         <Button
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           onClick={this.signup}
         >
           Signup
         </Button>
         {/* <Button
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           component={Link}
           to='/driver_signup/'
         >
           Hotel Signup
         </Button>
         <Button
           fullWidth
           variant="contained"
           color="primary"
           className={classes.submit}
           component={Link}
           to='/driver_signup/'
         >
           Shelter Signup
         </Button> */}
       </form>
     </Paper>
   </main>
  }
</div>
);

}
}

Login.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);