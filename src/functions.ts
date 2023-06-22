import {BaseNameAndId} from "./types";

export const getNameById = (id: number, brands: BaseNameAndId[]):string => {
  return brands.find((item) => item.id === id)?.name || '';
}

export const getIdByName = (name: string, brands: BaseNameAndId[]): number => {
  return brands.find((item) => item.name === name)?.id || 0;
}