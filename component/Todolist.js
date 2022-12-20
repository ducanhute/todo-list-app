import html from '../core.js'
import TodoItem from './TodoItem.js';
import { connect } from '../store.js';
function Todolist({todos,filter ,filters, editIndex}) {
    // var a = todos.map(todo => ({todo}))  
    // console.log("todo map",a)
    // var b = todos.map(todo => (todo))  
    // console.log("todo map b",b)       
    return html `
    <section class="main">
        <input 
            id="toggle-all" 
            class="toggle-all" 
            type="checkbox"
            onchange = "dispatch('tonggleAll', this.checked)"
            ${todos.every(filters.completed) && 'checked'}
        >
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            ${todos.filter(filters[filter]).map((todo,index) =>TodoItem({todo: todo, index, editIndex}))}  
        </ul>
    </section>
    `
}
export default  connect()(Todolist);
/**
 * GIẢI THÍCH CODE:
 * 1. Todo: todo: có thể viết gọn là todo,: Enhace object literals
 * 
 */