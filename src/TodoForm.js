import React, {useState} from 'react';

const TodoForm = ({createTodo}) => {
    const INITIAL_STATE = {
        task: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        createTodo(formData.task);  
        setFormData(INITIAL_STATE);
    }

    return (
        <div>
            <h2>To-do List</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task"></label>
                <input 
                    type="text" 
                    name="task"
                    onChange={handleChange}
                    value={formData.task}
                />
                <button>Add this Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;