import React, { Component } from 'react'
import DonatedNumber from './donatedNumber';
import BankStatements from '../components/BankStatements'

export class donate extends Component {
  
  state = {
    bankStatements : [
    {
      charge: 21.35
    },
    {
      charge: 34.40
    },
    {
      charge: 5.24
    }
  ]
  }

  render() {
    return (
        <div>
            <h1>Donations</h1>
            <DonatedNumber />
            <BankStatements bankStatements={this.state.bankStatements}/>
            <p>This is the donations page</p>
        </div>
    )
  }
}

export default donate
