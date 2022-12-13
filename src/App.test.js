import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import App from './components/App';

afterEach(cleanup);

describe("Testing the happy way of application", () => {
  it("should success when title 'Just Another ToDo List' is in the document", () => {
    render(<App />);

    const result = screen.getByText("Just Another ToDo List");

    expect(result).toBeInTheDocument();
  });

  it("should success when placeholder 'Type your task up to 30 characters and Enter!' is in the document", () => {
    render(<App />);

    const result = screen.getByPlaceholderText("Type your task up to 30 characters and Enter!");

    expect(result).toBeInTheDocument();
  });

  it("should reset the input and create a new task with typed text when inserted a text with length <= 30", () => {
    const testText = "Testando nova task";

    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {target: {value: testText}});
    fireEvent.keyDown(input, {key: "Enter"});

    const task = screen.getByText(testText);

    expect(input).toHaveValue("");
    expect(task).toHaveTextContent(testText);
  });

  it("should respond with null when querying a task after it is deleted", () => {
    const testText = "Testando nova task";

    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {target: {value: testText}});
    fireEvent.keyDown(input, {key: "Enter"});

    const toDelete = screen.getByTestId("deletion");

    fireEvent.click(toDelete);

    const task = screen.queryByText(testText);

    expect(task).toBe(null);
  });

  it("should change from unchecked to checked box when unchecked box is clicked", () => {
    const testText = "Testando nova task";

    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {target: {value: testText}});
    fireEvent.keyDown(input, {key: "Enter"});

    const toCheck = screen.getByTestId("unchecked");

    fireEvent.click(toCheck);

    const box = screen.queryByTestId("checked");

    expect(box).not.toBe(null);
  });

  it("should change from checked to unchecked box when checked box is clicked", () => {
    const testText = "Testando nova task";

    render(<App />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {target: {value: testText}});
    fireEvent.keyDown(input, {key: "Enter"});

    const toCheck = screen.getByTestId("unchecked");

    fireEvent.click(toCheck);

    const checkedBox = screen.queryByTestId("checked");

    expect(checkedBox).not.toBe(null);

    const toUnCheck = screen.getByTestId("checked");

    fireEvent.click(toUnCheck);

    const uncheckedBox = screen.queryByTestId("unchecked");

    expect(uncheckedBox).not.toBe(null);
  });
});
