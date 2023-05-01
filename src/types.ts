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

export type CartType = {
  image: string,
  title: string,
  regular_price: {
    currency: string,
    value: number,
  },
  sku: string,
  quantity: number,
}

export type AddCartItemProps = {
  sku: string,
  quantity: number
}

export type RemoveCartItemProps = {
  sku: string,
  quantity: number
}

export type CartContextType = {
  cart: CartType[],
  addItem: (params: AddCartItemProps) => void,
  removeItem: (params: RemoveCartItemProps) => void,
}

export type CartActionsType =
    {type: 'ADD_TO_CART'} & {item: CartType} |
    {type: 'REMOVE_FROM_CART'} & {item: CartType};