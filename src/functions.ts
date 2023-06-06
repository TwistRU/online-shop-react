import {BrandType} from "./types";

export const getBrandNameById = (id: number, brands: BrandType[]):string => {
  return brands.find((item) => item.id === id)?.name || '';
}

export const getBrandIdByName = (name: string, brands: BrandType[]): number => {
  return brands.find((item) => item.name === name)?.id || 0;
}