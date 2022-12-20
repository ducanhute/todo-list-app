//  Log ra state trước và sau khi dispatch và các argument
// Ta viết hàm này để ôm ngoài hàm reducer phải đảm bảo: Hàm reducer trả tra state thì hàm này cũng phải tương tự
export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log("Prev State:", prevState)
        console.log('Action Argument:', args)
            //==================================
        const nextState = reducer(prevState, action, args)
            //==================================
        console.log("nextState", nextState)
        console.groupEnd()
        return nextState
    }
}