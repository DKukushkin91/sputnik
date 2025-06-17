import { faker } from '@faker-js/faker/locale/ru'

export const getProducts = () => {
  const products = Array.from({ length: 12 }, (_item, index) => index + 1)
  const result: IProduct[] = []

  products.forEach(() => {
    result.push({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      origin: faker.location.country(),
      price: Number(faker.commerce.price({
        min: 10000,
        max: 100000000,
      })),
      currency: faker.finance.currencyCode() as Currency,
      imageUrl: faker.image.avatarGitHub(),
    })
  })

  return result
}
