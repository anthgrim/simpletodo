import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTodoItem(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoItem) return alert("Please type your todo");
    setTodos((prev) => [...prev, todoItem]);
    setTodoItem("");
  };

  const todoList = todos.map((todo, index) => {
    return <TodoItem key={index} text={todo} />;
  });

  return (
    <div data-testid="todoList">
      <h1>MY TODO LIST</h1>
      <form data-testid="todoForm" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="todo">Add Todo</label>
        <input
          data-testid="todoInput"
          type="text"
          name="todo"
          placeholder="Add todo here..."
          value={todoItem}
          onChange={(e) => handleChange(e)}
          required
        />
        <button data-testid="submitBtn">Submit</button>
      </form>
      {todoList.length > 0 ? (
        <ul data-testid="list">{todoList}</ul>
      ) : (
        <p>No todos added yet</p>
      )}
    </div>
  );
};

export default TodoList;
