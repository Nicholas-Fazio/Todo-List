import AddTodo from "./components/AddTodo/AddTodo";
import ListTodos from "./components/ListTodos/ListTodos";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;
