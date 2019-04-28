import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';

export class CardPurchase extends Component {
  render() {
    return (
        <StripeProvider apiKey="pk_test_VghJyHJS1r7oCxjuWxZZmcak00G848caUQ">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
        </StripeProvider>
    )
  }
}

export default CardPurchase;
