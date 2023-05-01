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
  addItem: (params: CartType) => void,
  removeItem: (params: CartType) => void,
}

export type CartActionsType =
    {type: 'ADD_TO_CART'} & {item: CartType} |
    {type: 'REMOVE_FROM_CART'} & {item: CartType};

export type CartStateType = {
  cart: CartType[],
}