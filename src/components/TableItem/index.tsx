import * as C from "./styles";
import { Item } from "../../Types/Item";
import { formatedDate } from "../../helpers/dateFilter";
import { categories } from "../../data/categories";

type Props = {
  item: Item;
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatedDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category].expense ? "red" : "green"}>
          {formatCurrency(item.value)}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
