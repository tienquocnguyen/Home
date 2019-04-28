import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements';
import CardPurchase from '../components/CardPurchase';
import firebase from '../Firebase'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';



const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
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
  card: {
    visibility: 'hidden'
  }
});

export class donate extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      displayPurchase: false,
      totalDonated: 0,
      bankStatements : [
      {
        charge: 21.35,
      },
      {
        charge: 34.40
      },
      {
        charge: 5.24
      }
      ]
    };

    this.showPay = this.showPay.bind(this);

  }
  getPaymentInformation(){
    var user = firebase.auth().currentUser;
    var docRef = firebase.firestore().collection("users").doc(user.email);
    docRef.get().then(function(doc) {
      if (doc.exists) {
        return (doc.data()["payments"]);
      }
    })
  }

  calculateRound = (charge) => {
    return Math.round(charge)
  }

  showPay() {
    this.setState({displayPurchase: !this.state.displayPurchase});
  }

  render() {
<<<<<<< HEAD
    return (
        <div>
            <h1 >Donations</h1>
            <DonatedNumber />
=======

    const { classes } = this.props;

    const initial = (
      <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h3">
        Donations
        <hr></hr>
      </Typography>
      <Typography component="h1" variant="h5">
        Total Donated: $100
        <pre></pre>
      </Typography>
      {/* <DonatedNumber /> */}
>>>>>>> 0e7077478f74b4b8c275bbb6298da0069040c6e7
            <BankStatements bankStatements={this.state.bankStatements}/>
            <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick = {this.showPay}
        >
          Donate
        </Button>
    </Paper>
  </main>
    )

    const pay = (
      <main className={classes.main}>
    <CssBaseline />
    <Paper className={classes.paper}>
    <CardPurchase className={classes.card}/>
    <Button
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      onClick = {this.showPay}
    >
      Back
    </Button>
    </Paper>
  </main>
    )

    return (
  //this.props.loading ?

  //<CircularProgress className={classes.progress} />

  //:
      this.state.displayPurchase? pay : initial

    );
  }
}

<<<<<<< HEAD
export default donate;
=======
export default withStyles(styles)(donate);
>>>>>>> 0e7077478f74b4b8c275bbb6298da0069040c6e7
