import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  test("Render the todo list component", () => {
    render(<TodoList />);
    const todoListElement = screen.getByTestId("todoList");
    expect(todoListElement).toBeInTheDocument();
    expect(todoListElement).toHaveTextContent("MY TODO LIST");
    expect(todoListElement).toHaveTextContent("No todos added yet");
  });

  test("The form should be in the todo list component", () => {
    render(<TodoList />);
    const todoForm = screen.getByTestId("todoForm");
    expect(todoForm).toBeInTheDocument();
    expect(todoForm).toHaveFormValues({ todo: "" });
  });

  test("The text input in the form is present, required and type text", () => {
    render(<TodoList />);
    const todoInput = screen.getByTestId("todoInput");
    expect(todoInput).toBeInTheDocument();
    expect(todoInput).toBeRequired();
    expect(todoInput).toHaveAttribute("type", "text");
  });

  test("Pass test text input in form", () => {
    render(<TodoList />);
    const todoInput = screen.getByTestId("todoInput");
    userEvent.type(todoInput, "Test todo");
    expect(todoInput).toHaveValue("Test todo");

    //Simulate click event
    fireEvent.click(screen.getByTestId("submitBtn"));

    //Check data
    const todoItems = screen.getByTestId("list");
    expect(todoItems).toHaveTextContent("Test todo");
  });
});
