export const formatPrice = (priceInCopecks: number, currency: Currency): string => {
  const priceInMainCurrency = priceInCopecks / 100

  const getCurrencyInfo = (curr: Currency) => {
    switch (curr) {
      case 'RUB':
        return {
          locale: 'ru-RU',
          currencyCode: 'RUB',
        }
      case 'USD':
        return {
          locale: 'en-US',
          currencyCode: 'USD',
        }
      case 'EUR':
        return {
          locale: 'de-DE',
          currencyCode: 'EUR',
        }
      default:
        return {
          locale: 'en-US',
          currencyCode: 'USD',
        }
    }
  }

  const {
    locale,
    currencyCode,
  } = getCurrencyInfo(currency)

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(priceInMainCurrency)
}
