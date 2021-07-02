import React from 'react';
import TodoForm from './TodoForm';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleCreate = (task) => {
        dispatch({
            type: "add_todo",
            payload: task    
        })        
    }

    const handleUpdate = (id, updatedTask) => {
        dispatch({
            type: "update_todo",
            payload: {
                task: updatedTask,
                id: id
            }
        })
    }

    const handleDelete = (id) => {
        dispatch({
            type: "delete_todo",
            payload: id
        })
    }

    const todoJSX = todos.map(todo => (
        <Todo
            deleteTodo = {handleDelete}
            id = {todo.id}
            key = {todo.id}
            task = {todo.task}
            updateTodo = {handleUpdate}
        />
        ) 
    );

    return (
        <div>
            <TodoForm createTodo={handleCreate}/>
            <ul>{todoJSX}</ul>
        </div>
    )
}

export default TodoList;