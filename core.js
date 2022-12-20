// first: chuoi đầu tiên, Một mảng các chuỗi còn lại, values: mảng tất các các chuỗi nội suy
// strings.shift: lấy phần tử đầu tiên và xóa luôn phần tử đầu tiên
// =============================Temple engin=====================================
export default function html([first, ...strings],...values) {
    // console.log("first",first)
    // console.log("strings",strings)
    // console.log("values",values)
    return values.reduce(
        (acc,curr) => acc.concat(curr,strings.shift()),[first])
        .filter(x => x && x!== true || x ===0 )
        .join('')
  
}
// Store: kho, dữ liệu trong store gọi là state: Trạng thái
export function createStore(reducer) {
    let state = reducer() // hàm reducer sẽ return dữ liệu ban đầu của store lưu vào biến state: Hàm này sẽ đc tạo sau
    // Map là 1 object khác object thông thường là nó có thể lặp qua đc và key của object bth thì chỉ là strings
    //Key ở object Map thì có thể set với bất kỳ dữ liệu nào
    const roots = new Map()
    function render() {
        for(const [root, component] of roots) {
            const output = component() // component là function return ra chuỗi html
            root.innerHTML = output
        }
    }
// Return ra các phương thức để có thể làm việc với store
    return {
        attach(component, root) {
            roots.set(root, component) // Set key là root:ở đây là object, values của key là component.
            render() // sau khi render ở đây sẽ thấy view ngoài giao diện 

        },
        // kết nối giữa store và view
        connect(selector = state => state ) {
            return component => (props, ...args) => component(Object.assign({}, selector(state),...args))
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args)// update store
            render()
        }
    } 
}
// CÁCH SỬ DỤNG THƯ VIỆN
/**
 * 1 Tạo ra 2 file js: store và reducer
 */