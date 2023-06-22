'use client'

import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import React, { useRef } from 'react';

interface AddTodoProps {
  onAddTodo: (todoData: { todo: string }) => void;
}

function AddTodo(props: AddTodoProps) {
  const todoInputRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault(); // no reloading
  }

  /*
  const enteredTodo = todoInputRef.current.value;

  const todoData = {
    todo: enteredTodo,
  };

  props.onAddTodo(todoData); // for this function ( which will trigger backend)

  //-> JUST LIKE IN PAGES NEW-MEETUP INDEX:JS IN MEETUP APP ( FOLLOW REFERENCES)

  */

  return (
    <form>
      <HStack marginTop="40px">
        <Input
          type="text"
          ref={todoInputRef}
          variant="filled"
          placeholder="Enter your work here !"
        />

        <Button colorScheme="teal" type="submit" onClick={submitHandler}>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
