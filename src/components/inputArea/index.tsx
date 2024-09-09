import { useState } from "react";
import * as C from "./styles";
import { Item } from "../../Types/Item";
import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
  onClose: () => void;
};

export const InputArea = ({ onAdd, onClose }: Props) => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const handleAddEvent = () => {
    if (!date || !category || !title || !value) {
      alert("Preencha todos os campos");
      return;
    }

    let newItem: Item = {
      date: new Date(date),
      category,
      title,
      value: parseFloat(value),
    };

    // Adiciona o item à lista existente
    const storedItems = JSON.parse(localStorage.getItem("items") || "[]");
    const updatedItems = [...storedItems, newItem];
    // Salva os itens no localStorage
    localStorage.setItem("items", JSON.stringify(updatedItems));

    onAdd(newItem);

    setDate("");
    setCategory("");
    setTitle("");
    setValue("");
    onClose();
  };

  return (
    <C.ModalOverlay>
      <C.ModalContent>
        <C.InputWrapper>
          <label>Data</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </C.InputWrapper>

        <C.InputWrapper>
          <label>Categoria</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            {Object.keys(categories).map((key) => (
              <option key={key} value={key}>
                {categories[key].title}
              </option>
            ))}
          </select>
        </C.InputWrapper>

        <C.InputWrapper>
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </C.InputWrapper>

        <C.InputWrapper>
          <label>Valor</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </C.InputWrapper>

        <C.ButtonWrapper>
          <button onClick={handleAddEvent}>Adicionar</button>
          <button onClick={onClose}>Fechar</button>{" "}
        </C.ButtonWrapper>
      </C.ModalContent>
    </C.ModalOverlay>
  );
};
