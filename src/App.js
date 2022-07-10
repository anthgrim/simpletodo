import "./App.css";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div data-testid="app" className="App">
      <TodoList />
    </div>
  );
}

export default App;
