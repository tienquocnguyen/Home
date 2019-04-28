import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements';
import CardPurchase from '../components/CardPurchase';

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

export default donate
