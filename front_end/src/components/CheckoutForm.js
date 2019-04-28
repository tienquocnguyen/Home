import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: ''};
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault();
    //const {checkoutForm} = this.state;
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/api/bank/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    });

    this.setState({amount: ''});
    if (response.ok) console.log("Purchase Complete!")
  }

  onChange = (e) => {
    this.setState({ amount: e.target.value})
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    const { amount } = this.state
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <input onChange = {this.onChange} value={this.state.amount} type="number" min="0.00" max="10000.00" step="0.01" />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);