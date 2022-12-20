import { attach } from "../store.js"; 
import App from "../component/App.js"

attach(App,document.getElementById('root'))
// Giải thích Luồng code chạy:
/**
 * Khi hàm app đc chạy nó sẽ random ra một loạt các chuỗi htnl, và thằng attach sẽ nhận thằng app sau khi chạy và chạy hàm render, tạo 
 * ra giao diện hiện thị trên trình duyệt
 *      Trong hàm app sẽ đc chạy nhiều hàm: Mỗi hàm tương ứng chạy tạo ra một phần component, khi app chạy thì đồng thời các hàm này chạy 
 * và tạo ra nhiều component: từ đó ta tổng hợp lại để tạo nên web site
 */