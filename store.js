import { createStore } from "./core.js";
import reducer from "./reducer.js";
import withLogger from "./logger.js"//Khi export là default thì có thể import với bất kỳ tên gì

const {attach, connect, dispatch} = createStore(withLogger(reducer))
window.dispatch = dispatch
export {
    attach,
    connect
}
// Store chứa các phương thức attach, connect, dispatch mà hàm createStore(nhận reducer) trả về