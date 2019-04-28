import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hardCopyObject, formatCurrency } from './utils'
import { BRL as brlConfiguration } from './constants/currencyConfigurations'

const initialState = {
  value: 0,
  maskedValue: '0,00',
}

class CurrencyInput extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    defaultValue: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    currency: PropTypes.string,
    currencyConfiguration: PropTypes.shape({
      symbol: PropTypes.string,
      precision: PropTypes.number,
      decimal: PropTypes.string,
      separator: PropTypes.string,
    }),
    showSymbol: PropTypes.bool,
    spaceSymbol: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    name: '',
    className: '',
    style: {},
    currency: 'BRL',
    currencyConfiguration: hardCopyObject(brlConfiguration),
    showSymbol: false,
    spaceSymbol: false,
    onChange: Function.prototype,
  }

  constructor(props) {
    super(props)

    this.state = hardCopyObject(initialState)
    this.initialState = hardCopyObject(initialState)
  }

  maskValue = (value = 0) => {
    const {
      currency,
      showSymbol,
      spaceSymbol,
    } = this.props

    return formatCurrency(value, currency, {
      showSymbol,
      spaceSymbol,
    })
  }

  unmaskValue = (maskedValue = '') => {
    return parseInt(maskedValue.replace(/\D/g, '') || 0, 10) / 100
  }

  handleChange = (event) => {
    const { target } = event
    const { value: inputValue = 0 } = target
    const { onChange } = this.props

    const value = this.unmaskValue(inputValue)
    const maskedValue = this.maskValue(value)

    this.setState({
      value,
      maskedValue,
    })

    if (!onChange || typeof onChange !== 'function') {
      return false
    }

    return onChange(event, value, maskedValue)
  }

  setInitialValues = () => {
    const { value: givenValue, defaultValue: givenDefaultValue } = this.props

    const value = givenValue || givenDefaultValue
    const maskedValue = this.maskValue(value)

    this.setState({
      value,
      maskedValue,
    })
  }

  componentDidUpdate(prevProps) {
    const { defaultValue: prevGivenDefaultValue } = prevProps
    const { defaultValue: givenDefaultValue } = this.props

    if (givenDefaultValue !== prevGivenDefaultValue) {
      this.setInitialValues()
    }
  }

  componentDidMount() {
    this.setInitialValues()
  }

  render() {
    const { name: inputName, className, style } = this.props
    const { maskedValue } = this.state

    return (
      <input
        type="tel"
        className={className}
        style={style}
        name={inputName}
        value={maskedValue}
        onChange={this.handleChange}
      />
    )
  }
}

export default CurrencyInput
