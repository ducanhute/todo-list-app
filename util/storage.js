const TODO_STORAGE_KEY = 'TODOS'
export default {
    get() {
        return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos))
    }
}
/**
 * OBJECT NÀY CÓ TÁC DỤNG LẤY VÀ LƯU DỮ LIỆU CỦA TA VÀO LOCAL STORAGE
 */