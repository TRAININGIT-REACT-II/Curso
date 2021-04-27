// Store
import store from "./store";

// Action creators
import * as todosActions from "./actions/todos";
import * as userActions from "./actions/user";

// Vamos a suscribirnos al estado para ir viendo los cambios en
// la consola
const unsubscribe = store.subscribe(() => {
  if (store.getState().user.name != null) {
    console.log(
      `${store.getState().user.name} ha modificado la lista de TODOs`
    );
    console.log(store.getState().todos.list);
  } else {
    console.log(store.getState());
  }
});

// Lanzamos varias acciones con dispatch
store.dispatch(userActions.updateName("Tana"));
store.dispatch(todosActions.addTodo("Dormir"));
store.dispatch(todosActions.addTodo("Salir a pasear"));
store.dispatch(todosActions.addTodo("Volver a dormir"));
store.dispatch(todosActions.completeTodo(0));
store.dispatch(todosActions.completeTodo(1));
store.dispatch(todosActions.completeTodo(2));
store.dispatch(todosActions.clearTodos());

// Nos desuscribimos del listener
unsubscribe();
