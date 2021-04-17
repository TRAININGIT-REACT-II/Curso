// Los selectores te permiten obtener datos del store de
// redux. Con relesect, estos valores se memorizan e incluso
// puedes crear combinaciones fácilmente
import { createSelector } from "reselect";

// Un selector básico para obtener el nombre.
export const getTodos = (state) => state.list;

// Hacemos uso de reselect para crear un selector basado en un
// filtro
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.completed)
);
