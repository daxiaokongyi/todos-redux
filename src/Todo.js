import React, {useState} from 'react';

const Todo = ({deleteTodo, updateTodo, id, task}) => {
    const [editingTask, setEditingTask] = useState(task);  
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = evt => {
        setEditingTask(evt.target.value);
    }

    const stopEditing = evt => {
        evt.preventDefault();
        updateTodo(id, task);
        setIsEditing(false);
    }

    const handleDelete  = () => {
        deleteTodo(id);
    }

    const toggleEdit = () => {
        setIsEditing(e => !e);
    }

    if (isEditing) {
        return (
            <div>
                <form action="" onSubmit={stopEditing}>
                    <input 
                        type="text" 
                        value={editingTask}
                        onChange={handleChange}
                    />
                    <button>Stop Editing</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <li>{editingTask}</li>
            <button onClick={handleDelete}>X</button>
            <button onClick={toggleEdit}>Edit</button>
        </div>
    )
}

export default Todo;