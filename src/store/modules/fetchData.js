import axios from 'axios';

export default {
    actions: {
        async FetchAction(result) {
            const res = await axios.get(`http://localhost:3001/todos`);
            const newTodos = res.data;
            result.commit('updateTodos', newTodos);
        }
    },
    mutations: {
        updateTodos(state, newTodos) {
            state.todos = newTodos
        }
    },
    state: {
        todos: []
    },
    getters: {
        allTodos(state) {
            return state.todos
        }
    }
}