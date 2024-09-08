import * as C from "./App.styles";
import { useState, useEffect } from "react";
// Importação dos types
import { Item } from "./Types/Item";
import { Category } from "./Types/Category";
// Importação dos dados
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea/index";


const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Área de informações */}

        {/* Área para inserir informações */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
