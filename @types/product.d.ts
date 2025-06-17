type Currency = 'RUB' | 'USD' | 'EUR'

interface IProduct {
  id: string
  title: string
  origin: string
  price: number
  currency: Currency
  imageUrl: string
}
