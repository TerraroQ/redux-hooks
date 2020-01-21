import React from 'react';

import AddTodoForm from '../components/AddTodoForm';
import TodoItems from '../components/TodoItems';

const TodoList = () => (
    <div>
        <AddTodoForm />
        <TodoItems />
    </div>
);

export default TodoList;