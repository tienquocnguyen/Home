import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class BankStatementItem extends Component {
    
    constructor()
    {
      super();
    }
    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
      //destructuring
      const {charge} = this.props.bankStatementItem;
    return (
      <div style={this.getStyle()}>
        <p>
            Charge
            {' $'}
            {Number(charge).toFixed(2)}
            {'. You donated: '}
            {(Math.ceil(charge) - charge).toFixed(2)}
            {'¢'}
        </p>
      </div>
    )
  }
}

//PropTypes
BankStatementItem.protoTypes = {
  bankStatementItem: PropTypes.object.isRequired
}

export default BankStatementItem
