# React Currency Input
![Preview of Pismo React Currency Input](https://i.imgur.com/fwqBRjG.png)

## Installation

> yarn add @pismo/react-currency-input

## Usage

```js
import React, { Component } from 'react'
import CurrencyInput from '@pismo/react-currency-input'

class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { amount: 500 }
  }

  handleChange = (event, value, maskedValue) => {
    this.setState({ amount: value })
  }

  render() {
    const { amount } = this.state

    return (
      <CurrencyInput value={amount} onChange={this.handleChange} />
    )
  }
}
```

### Props

 - `currency`: 3-character acronym for the desired currency.
 Defaults to `BRL`. (`USD` is also supported without passing any `currencyConfiguration` object).

 - `currencyConfiguration`: Check `/src/constants/currencyConfigurations` for the pre-defined ones.

 - `showSymbol`: Whether to show or hide the `symbol` (passed on `currencyConfiguration`) on masked values.
 Defaults to `false`.

 - `spaceSymbol`: Appends a space `' '` to the configured `symbol`. e.g.: "R$ 500,00" instead of "R$500,00".
Defaults to `false`.

 - `onChange`: Callback that gets called whenever user changes input value.
 Arguments: `event`, `value` and `maskedValue`.

## Development

This project uses [parcel](https://github.com/parcel-bundler/parcel) for zero-configuration bundling.
> yarn global add parcel-bundler

Then it should just work! This will run a dev server for you, which will serve the generated `/demo` folder
> yarn start

Generating the distribution files in `/dist`:
> yarn build

### Feel free to contribute!
