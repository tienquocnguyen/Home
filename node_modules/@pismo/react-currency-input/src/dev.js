import React, { Component } from 'react'
import { render } from 'react-dom'
import CurrencyInput from './'

class App extends Component {
  state = {
    amount: 500,
    maskedAmount: 'R$ 500,00',
  }

  handleChange = (event, value, maskedValue) => {
    this.setState({
      amount: value,
      maskedAmount: maskedValue,
    })
  }

  render() {
    const { amount } = this.state

    const containerStyle = {
      textAlign: 'center',
      backgroundColor: '#333',
      color: '#fff',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    }

    const titleStyle = {
      marginBottom: '2rem',
    }

    const codeStyle = {
      display: 'block',
      backgroundColor: '#666',
      borderRadius: '.2rem',
      padding: '1.5rem',
      margin: '1rem 0',
    }

    const inputStyle = {
      textAlign: 'center',
      backgroundColor: 'white',
      border: 0,
      borderRadius: '.2rem',
      fontSize: '3rem',
      padding: '2rem 0',
    }

    return (
      <div style={containerStyle}>
        <div>
          <h1 style={titleStyle}>React Currency Input</h1>

          <code style={codeStyle}>
            {JSON.stringify(this.state, null, 2)}
          </code>

          <CurrencyInput
            value={amount}
            currency="BRL"
            showSymbol
            spaceSymbol
            style={inputStyle}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

const container = document.getElementById('app-container')
render(<App />, container)

export default App
