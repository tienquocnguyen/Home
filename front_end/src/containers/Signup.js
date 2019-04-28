import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';

import firebase from '../Firebase';
import { Link } from 'react-router-dom';
import * as actions from '../store/actions/auth';


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
        backgroundColor: '#F5F7FA',
        //visibility: 'hidden'
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


class Signup extends React.Component {
    constructor() {
    super();
  this.state = { 
      expanded: false,
      showUserPage: false,
      showHotelPage: false,
      showSignup: false,
			showInitial: true,
			email: '',
			password: '',
			name: '',
			address: ''
 };

 this.handleChange = this.handleChange.bind(this);
 this.signup = this.signup.bind(this);
 this.showUserPage = this.showUserPage.bind(this);
 this.showHotelPage = this.showHotelPage.bind(this);
 this.showSignup = this.showSignup.bind(this);
}

 handleChange(e) {
	this.setState({ [e.target.name]: e.target.value });
}

signup(e){
	e.preventDefault();
	firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
	.catch((error) => {
		console.log(error);
	});
	firebase.firestore().collection('users').add({
		name: this.state.name,
		email: this.state.email,
		status: 0,
		role: "donator",
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
	firebase.firestore().collection('users').add({
		name: this.state.name,
		email: this.state.email,
		address: this.state.address,
		numberOfRooms: 0,
		role: "hotel"
	})
	.catch((error) => {
		console.log(error);
	})
}

//  handleSubmit = (e) => {
//          e.preventDefault();
//        console.log(this.state);
//        // var location = this.state.street_address + ' ' + this.state.city + ' ' + this.state.state
//        // Axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
//        // 	params:{
//        // 		address:location,
//        // 		key:'AIzaSyCAp9svAAYxNF4P4BXO1-BVQ4lcMCHn09k'
//        // 	}
//        // })
//        // .then(response => {
//        // 	this.setState({
//        // 		lat: response.data.results[0].geometry.location.lat
//        // 	})
//        // 	this.setState({
//        // 		lng: response.data.results[0].geometry.location.lng
//        // 	})
//        // 	console.log(this.state.lat)
//        // 	console.log(this.state.lng)
//              this.props.onAuth(this.state.email, this.state.password1)
//              .then( res =>{
//                      console.log('res here');
//                      console.log(res);
//                       alert('Singup successful! You can login now')
//                       this.props.history.push('/login')
//            }).catch(error => {
//                alert('Please enter correct information')
//                console.log(error)
//            })
//        // }).catch(error => {
//        // 	alert('Please enter correct infromation')
//        // 	console.log('error here')
//        // 	console.log(error)
//        // })
//    }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  showUserPage() {
    this.setState({showUserPage: true});
  }

  showHotelPage() {
    this.setState({showHotelPage: true });
  }

  showSignup() {
    this.setState({showSignup: true });
  }

  hideSignup() {
      this.setState({showSignup: false});
  }

wrapperUser = () => {
    if (!this.state.showSignup) {
        this.showSignup();
        this.showUserPage();
    } else {
        this.hideSignup();
    }
}

wrapperHotel = () => {
    if (!this.state.showSignup) {
        this.showSignup();
        this.showHotelPage();
    } else {
        this.hideSignup();
    }
}

  render() {
    const { classes } = this.props;

    const form = (
        this.state.showUserPage?
        <main className={classes.main}>
			      <CssBaseline />
			      <Paper className={classes.paper}>
			        <Avatar className={classes.avatar}>
			          <LockOutlinedIcon />
			        </Avatar>
			        <Typography component="h1" variant="h5">
			          User Signup
			        </Typography>
			        <form className={classes.form} onSubmit={this.submit}>
							<FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="name">Name</InputLabel>
			            <Input id="name" name="name" value={this.state.name} autoFocus onChange={this.handleChange} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="email">Email</InputLabel>
			            <Input id="email" name="email" value={this.state.email} autoFocus onChange={this.handleChange} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="password">Password</InputLabel>
			            <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
			          </FormControl>
			          <Button
			            //type="submit"
			            fullWidth
			            variant="contained"
			            color="primary"
									className={classes.submit}
									onClick = {this.signup}
			          >
			            Signup
			          </Button>
			          <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			            component={Link}
			            to='/login/'
			          >
			            Login
			          </Button>
                      <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
                  onClick = {this.wrapperUser}
			          >
			            Back
			          </Button>
			        </form>
			      </Paper>
                </main> 
                :
                <main className={classes.main}>
			      <CssBaseline />
			      <Paper className={classes.paper}>
			        <Avatar className={classes.avatar}>
			          <LockOutlinedIcon />
			        </Avatar>
			        <Typography component="h1" variant="h5">
			          Hotel Signup
			        </Typography>
			        <form className={classes.form} onSubmit={this.submit}>
							<FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="name">Name</InputLabel>
			            <Input id="name" name="name" value={this.state.name} autoFocus onChange={this.handleChange} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="email">Email</InputLabel>
			            <Input id="email" name="email" value={this.state.email} autoFocus onChange={this.handleChange} />
			          </FormControl>
								<FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="address">Address</InputLabel>
			            <Input id="address" name="address" value={this.state.address} autoFocus onChange={this.handleChange} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="password">Password</InputLabel>
			            <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChange} />
			          </FormControl>
			          <Button
			            //type="submit"
			            fullWidth
			            variant="contained"
			            color="primary"
									className={classes.submit}
									onClick = {this.signupHotel}
			          >
			            Signup
			          </Button>
			          <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			            component={Link}
			            to='/login/'
			          >
			            Login
			          </Button>
                      <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
                  onClick = {this.wrapperHotel}
			          >
			            Back
			          </Button>
			        </form>
			      </Paper>
			    </main>
    );

    const initial = (
        <main className={classes.main}>
			      <CssBaseline />
			      <Paper className={classes.paper}>
			        {/* <Avatar className={classes.avatar}>
			          <LockOutlinedIcon />
			        </Avatar> */}
			        <Typography component="h1" variant="h5">
			          Signup
			        </Typography>
			        {/* <form className={classes.form} onSubmit={this.handleSubmit}>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="username">Email</InputLabel>
			            <Input id="username" name="username" value={this.state.username} autoFocus onChange={this.handleChangeUser} />
			          </FormControl>
			          <FormControl margin="normal" required fullWidth>
			            <InputLabel htmlFor="password">Password</InputLabel>
			            <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handleChangePassword} />
			          </FormControl> */}
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
			          {/* <Button
			            type="submit"
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			          >
			            Login
			          </Button>
			          <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
			            component={Link}
			            to='/Signup/'
			          >
			            Signup
			          </Button> */}
			          <Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
                        onClick = {this.wrapperUser}

			          >
			            User Signup
			          </Button>
						<Button
			            fullWidth
			            variant="contained"
			            color="primary"
			            className={classes.submit}
                        onClick = {this.wrapperHotel}
			          >
			            Hotel Signup
			          </Button>
			        {/* //</form> */}
			      </Paper>
			    </main>
    );

    return (
        <div>
            {this.state.showSignup? form : initial}
            {/* {this.state.showHotelPage? hotel : null} */}


        </div>
    );
}
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const mapStateToProps = (state) => {
// 	return {
// 		//loading: state.loading,
// 		//error: state.error
// 	}
// }

// const mapDispatchProps = dispatch => {
// 	return {
// 		onAuth: (email, password1) => dispatch(actions.authSignupRest(email, password1))
// 	}
// }

export default withStyles(styles)(Signup);
