import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements';
import CardPurchase from '../components/CardPurchase';
import firebase from '../Firebase'

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
  render() {
    return (
        <div>
            <h1 >Donations</h1>
            <DonatedNumber />
            <BankStatements bankStatements={this.state.bankStatements}/>
            <p>This is the donations page</p>
            <button onclick="donate()">Click me</button>
            <CardPurchase />
        </div>
    )
  }
}

export default donate;
