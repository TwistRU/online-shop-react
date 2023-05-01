import {BrandType} from "./types";

export const getBrandNameById = (id: number, brands: BrandType[]):string => {
  return brands.find((item) => item.id === id)?.title || '';
}