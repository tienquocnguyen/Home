import React, { Component } from 'react'
import BankStatementItem from './BankStatementItem';
import PropTypes from 'prop-types';

export class BankStatements extends Component {
  render() {
    return this.props.bankStatements.map((bankStatementItem)=> (
       <BankStatementItem bankStatementItem={bankStatementItem} />
    ));
  }
}

//PropTypes
BankStatements.protoTypes = {
  bankStatements: PropTypes.array.isRequired
}
export default BankStatements
