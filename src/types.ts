export type BrandType = {
  id: number,
  name: string,
}

export type ProductType = {
  id: number,
  article: string,
  sku: string,
  name: string,
  price: number,
  color: ProductColorType,
  createdDate: string,
  discount: number,
  newProduct: boolean,
  previewImage: previewImageType,
  brand: BrandType,
  size: sizeType[]
}

export type ProductInfoType = {
  minPrice: number,
  maxPrice: number,
  productProperties: any[],
  products: ProductType[],
  productsCount: number,
}

export type sizeType = {
  id: number,
  value: number,
  available: number,
  description: string,
  onFitting: boolean,
  subscribed: boolean,
}

export type previewImageType = {
  id: number,
  name: string,
  url: string
}

export type ProductColorType = {
  id: number,
  name: string,
  value: string
}

export type PriceType = {
  currency: string,
  value: number,
}

export type ProductCartType = {
  article: string,
  title: string,
  price: number,
  image: string,
}

export type CartType =  ProductCartType & {quantity: number};

export type CartContextType = {
  state: CartStateType,
  addItem: (params: ProductCartType) => void,
  removeItem: (params: ProductCartType) => void,
  changeQuantity: (params: ProductCartType, step: number) => void,
}

export type CartActionsType =
    {type: 'ADD_TO_CART'} & {item: ProductCartType} |
    {type: 'REMOVE_FROM_CART'} & {item: ProductCartType} |
    {type: 'CHANGE_QUANTITY'} & {item: ProductCartType} & {step:number};

export type CartStateType = {
  cart: CartType[],
}

export type CategoryType = {
  id: number,
  title: string,
  img: string,
}

export type FooterInfo = {
  id: string,
  title: string,
  links: { title: string, link: string }[]
}