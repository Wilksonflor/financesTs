import * as C from "./styles";
import { Item } from "../../Types/Item";
import { formatedDate } from "../../helpers/dateFilter";
import {} from "../../data/categories";
type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatedDate(item.date)}</C.TableColumn>
      <C.TableColumn>{item.category}</C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>R$ {item.value}</C.TableColumn>
    </C.TableLine>
  );
};
