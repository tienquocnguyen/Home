import currency from 'currency.js'
import { hardCopyObject } from '../../utils'
import { currencyConfigurations } from '../../constants'

const formatCurrency = (value = 0, code = 'BRL', displayOptions = {}) => {
  const config = hardCopyObject(currencyConfigurations[code])

  if (!config) {
    throw new Error(`You need to provide a currencyConfiguration for currency code ${code}.`)
  }

  const { showSymbol, spaceSymbol } = displayOptions

  if (spaceSymbol) {
    config['symbol'] += ' '
  }

  return currency(value, config).format(showSymbol)
}


export default formatCurrency
