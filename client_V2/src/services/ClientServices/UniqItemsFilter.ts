import { IProductInfoResponse } from "../../types/IProductInfoResponse";

export const uniqItemsFilter = (itemsArray: IProductInfoResponse[], filterValue: string) => {
  
  const filteredItems: IProductInfoResponse[] = itemsArray.reduce((acc, item) => {
    // @ts-ignore
     if (acc.map[item[filterValue]]) return acc;
     // @ts-ignore
     acc.map[item[filterValue]] = true;
    
     acc.items.push(item);
     return acc;
   }, {map: {}, items: [] as IProductInfoResponse[]}).items;

   return filteredItems;
}
