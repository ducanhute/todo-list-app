import html from '../core.js'
function TodoItem({todo, index, editIndex}) {
    return html `
    <li class=${todo.completed && "completed"} ${editIndex === index && 'editing'} >
        <div class="view">
            <input 
                class="toggle" type="checkbox" 
                ${todo.completed && 'checked'}
                onchange = "dispatch('toggle', ${index})"
            >
                <label ondblclick="dispatch('startEdit',${index })" >${todo.title}</label> 
                <button class="destroy" onclick="dispatch('destroy',${index})"></button>
        </div>
        <input 
            class="edit" value="${todo.title}"
            onkeyup="event.keyCode===13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit')"
            onblur ="dispatch('endEdit', this.value.trim())"
        >
    </li>
    `
}
export default TodoItem;
/**
 * GIẢI THÍCH:
 * class=${todo.completed && "completed"}: Nếu true thì sẽ trả về "completeted", còn nếu sai thì biến nội suy sẽ trả về false:
 *    --> Do chuỗi html đc đi qua hàm html`` sẽ loại bỏ đc chữ false
 * Thêm class Editing vào thẻ li thì sẽ chuyển qua chế độ edit, thêm class "completed" thì ô sẽ đc tích và chữ sẽ đc gạch
 */