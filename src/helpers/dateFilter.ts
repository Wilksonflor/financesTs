import { Item } from "../Types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let [year, month] = date.split("-");
  let newList: Item[] = [];

  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};

export const formatedDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return `${day}/${month}/${year}`;
};
