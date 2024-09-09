import * as C from "./App.styles";
import { useState, useEffect } from "react";

import { Item } from "./Types/Item";
import { FaPlus } from "react-icons/fa";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth, filterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea/index";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/inputArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (const i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  // useEffect(() => {
  //   const savedItems = JSON.parse(localStorage.getItem("items") || "[]");
  //   setList(savedItems);
  // }, []);

  
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMontChange={handleMonthChange}
          income={income}
          expense={expense}
        />


        <C.BtnModal onClick={handleOpenModal} className="btnModal">
          {" "}
          <FaPlus />
          Adicionar Novo Item
        </C.BtnModal>{" "}
        {showModal && (
          <InputArea onAdd={handleAddItem} onClose={handleCloseModal} /> // Exibe o modal
        )}

        
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
