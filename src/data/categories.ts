import { Category } from "../Types/Category";
export const categories: Category = {
  food: { title: "Alimentação", color: "blue", expense: true },
  rent: { title: "Aluguel", color: "#D92525", expense: true },
  fixedExpenses: { title: "Despesas Fixas", color: "brown", expense: true },
  salary: { title: "Salário", color: "green", expense: false },
};
