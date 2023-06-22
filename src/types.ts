export type BaseNameAndId = {
  id: number,
  name: string
}

export type BrandType = BaseNameAndId

export type ProductType = BaseNameAndId & {
  article: string,
  price: number,
  isNew: boolean,
  brand: BrandType,
  images: ImageType[],
  colors: ProductColorType[],
  discount: ProductDiscountType,
  sizes: ProductSizeType[],
  createdDate: string,
}

export type ProductInfo = ProductType & {
  description?: string,
  category: CategoryType,
  features: ProductFeatureType[]
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

export type ImageType = BaseNameAndId & {
  url: string
}

export type ProductFeatureType = {
  value: string
}

export type ProductColorType = BaseNameAndId & {
  value: string
}

export type PriceType = {
  currency: string,
  value: number,
}

export type ProductCartType = {
  article: string,
  name: string,
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

export type CategoryType = BaseNameAndId & {
  image: ImageType,
  subCategories?: any[],
  level: number,
  isVisible: boolean
}

export type FooterInfo = {
  id: string,
  name: string,
  links: { name: string, link: string }[]
}