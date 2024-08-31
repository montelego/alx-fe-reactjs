// src/__tests__/TodoList.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(screen.getByText('Add Todo'));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<TodoList />);
  const firstTodo = screen.getByText('Learn React');
  fireEvent.click(firstTodo);
  expect(firstTodo).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const firstTodo = screen.getByText('Learn React');
  fireEvent.click(screen.getAllByText('Delete')[0]);
  expect(firstTodo).not.toBeInTheDocument();
});
