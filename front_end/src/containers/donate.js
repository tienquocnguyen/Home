import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

export class donate extends Component {
  
  state = {
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
  }

  calculateRound = (charge) => {
    return Math.round(charge)
  }

  render() {
    return (
        <StripeProvider apiKey="pk_test_VghJyHJS1r7oCxjuWxZZmcak00G848caUQ">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>

        <div>
            <h1 >Donations</h1>
            <DonatedNumber />
            <BankStatements bankStatements={this.state.bankStatements}/>
            <p>This is the donations page</p>
            <button onclick="donate()">Click me</button>
        </div>
        </StripeProvider>
    )
  }
}

export default donate
