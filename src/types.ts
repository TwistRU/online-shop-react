export type BrandType = {
  id: number,
  code: string,
  sort: string,
  title: string,
}

export type ProductType = {
  id: number,
  type: string,
  sku: string,
  title: string,
  regular_price: {
    currency: string,
    value: number,
  },
  image: string,
  brand: number,
}

export type PriceType = {
  currency: string,
  value: number,
}