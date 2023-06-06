export type BrandType = {
  id: number,
  name: string,
}

export type ProductType = {
  id: number,
  article: string,
  name: string,
  price: number,
  isNew: boolean,
  brand: BrandType,
  images: previewImageType[],
  colors?: ProductColorType[],
  discount: ProductDiscountType,
  sizes?: ProductSizeType[],
  createdDate: string,
  sku: string,
}

export type ProductDiscountType = {
  dateStart: string,
  dateEnd: string,
}

export type ProductInfoType = {
  minPrice: number,
  maxPrice: number,
  productsCount: number,
  productProperties: ProductProperty[],
  products: ProductType[]
}

export type ProductProperty = {
  id: number,
  propertyName?: string,
  data?: ProductPropertyValue[]
}

export type ProductPropertyValue = {
  id: number,
  value?: string,
  productsCount: number,
  description?: string
}

export type ProductSizeType = {
  id: number,
  value?: number,
  description?: string,
  available: number,
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