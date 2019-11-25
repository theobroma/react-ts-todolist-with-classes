// Import dependencies
import * as React from 'react';
import shortid from 'shortid';

// Import interfaces
import { ITodo, ITodoForm } from './../interfaces';

// Todo form component
const TodoForm = (props: ITodoForm) => {
  // Create ref for form input
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Create new form state
  const [formState, setFormState] = React.useState('');

  // Handle todo input change
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with the text from input
    setFormState(event.target.value);
  }

  // Handle 'Enter' in todo input
  function handleInputEnter(event: React.KeyboardEvent) {
    // Check for 'Enter' key
    if (event.key === 'Enter') {
      // Prepare new todo object
      const newTodo: ITodo = {
        _id: shortid.generate(),
        text: formState,
        completed: false,
      };

      // Create new todo item
      props.handleTodoCreate(newTodo);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  return (
    <input
      className="new-todo"
      ref={inputRef}
      type="text"
      placeholder="Enter new todo"
      onChange={(event) => handleInputChange(event)}
      onKeyPress={(event) => handleInputEnter(event)}
    />
  );
};

export default TodoForm;
