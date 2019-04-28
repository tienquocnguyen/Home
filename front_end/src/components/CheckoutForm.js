import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    var amount = parseInt(document.getElementById('donationAmount').value);
    amount = amount * 100;
    let response = await fetch("/api/bank/charge", {
        method: "POST",
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify({
          token: token.id,
          amount: amount
        })
    });

    if (response.ok) console.log("Purchase Complete!")
  }


  async transactionSubmit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/api/bank/charge", {
        method: "POST",
        headers:{"Content-Type": "text/plain"},
        body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
  }


  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <input type = "number" min="0.01" id = "donationAmount" placeholder = "Enter dollar amount"></input>
        <button onClick={this.submit}>Send</button>
        <button onClick = {this.transactionSubmit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);