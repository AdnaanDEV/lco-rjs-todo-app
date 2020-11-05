import React, { useState, useContext } from "react";

import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

import { TodoContext } from "../context/TodoContext";

import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const [ todos, dispatch ] = React.useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoString === "") {
      return alert("Please enter a todo.");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  const handleInput = (e) => {
    setTodoString(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
            value={todoString}
            onChange={handleInput}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
