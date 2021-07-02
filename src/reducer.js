import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
    todos: []
}

// reducer of todos
const reducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case "add_todo":
            return {...state, todos:[...state.todos, {task: payload, id: uuidv4()}]}
        case "update_todo":
            const todos = state.todos.map(todo => {
                if (todo.id === payload.id) {
                    return {...todo, task: payload.task}
                }
                return todo
            });

            return {...state, todos};
        case "delete_todo":
            return {...state, todos: state.todos.filter(todo => todo.id !== payload)}
        default:
            return state;
    }
}

export default reducer;