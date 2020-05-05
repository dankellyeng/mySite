import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CustomNavBar  from './components/CustomNavBar';
import Router from './router';
import { Layout } from './layouts/Layout';


// interface RootState {
//       editEnabled: boolean;
//   }


// const initialTodos: Array<Todo> = [
//   { text: "Walk the cat", complete: true },
//   { text: "Write app", complete: false },
// ];

const App: React.FC = () => {
//   const [todos, setTodos] = useState(initialTodos)

//   const toggleTodo: ToggleTodo = (selectedTodo) => {
//     const newTodos = todos.map(todo => {
//       if (todo === selectedTodo) {
//         return {
//           ...todo,
//           complete: !todo.complete
//         };
//       }
//       return todo;
//     });
//     setTodos(newTodos);
//   };

//   const addTodo: AddTodo = newTodo => {
//     newTodo.trim() !== "" &&
//     setTodos([...todos, {text: newTodo, complete: false }]);
//   };

  return (
    <div>
  <CustomNavBar />
  <Layout>
  <React.Fragment>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </React.Fragment>
  </Layout>

  </div>
  );
};

export default App;
