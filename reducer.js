import storage from "./util/storage.js"
const init = {
    todos: storage.get(),
    filter: 'all',
    // Tạo ra điều kiện để lọc
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo =>todo.completed
    },
    editIndex: null
}
const actions = {
    add({todos}, title) {
        if(title) {
            todos.push({title, completed: false})
            storage.set(todos)
        }
    },
    toggle({todos}, index) {
        const todo = todos[index]
        todo.completed = !todo.completed // đảo ngược trạng thái
        storage.set(todos) 
    },
    tonggleAll({todos}, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos) 
    },
    destroy({todos}, index) {
        todos.splice(index, 1) // xóa truyền vào index và số lượng phần tử cần xóa
        storage.set(todos)

    },
    switchFilter(state,filter) {
        state.filter = filter
        storage.set(state.todos)
    },
    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    startEdit(state, index) {
        state.editIndex = index
    },
    //Người dùng kích đúp chuyển sang chế độ chỉnh sửa, nhân phím enter hoặc blur để lưu và kết thúc.Nếu sửa thành ko có gì thì xóa đi
    endEdit(state, title) {
        if(state.editIndex || state.editIndex  === 0) {
            if(title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)

            } else {
                this.destroy(state,state.editIndex) // LƯU ý chỗ này truyền state chứ không truyền state.todos
                state.editIndex=null
            }
        }
    },
    // Phím ESC để thoát chế độ chỉnh sửa
    cancelEdit(state){
        state.editIndex = null
    }
}
export default function reducer(state = init, action, args) { // args: Các dữ liệu truyền vào sau action
    //Nếu mà trong object actions có action đc tryền ở trên reducer thì chạy 
    if(args) {
    }
    actions[action] && actions[action](state, ...args ) // Biến args ở đây là một mảng chứa value khi dispatch nhận vào, ...args bỏ ngoặc mảng
    return state
}