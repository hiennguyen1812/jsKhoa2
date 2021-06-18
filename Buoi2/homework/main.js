import  Qlnv  from './qlnv.js'

const container = document.getElementById('container')
const inputId = document.getElementById('id')
const inputName = document.getElementById('name')
const inputImage = document.getElementById('image')
const inputCreatedAt = document.getElementById('created-at')

const arrEmployee = []

const newEmployee1 = new Qlnv(1, 'Hien', 'https://thuthuatnhanh.com/wp-content/uploads/2020/10/anh-avatar-dep-cho-con-trai-390x390.jpg', '03/06/2021')
const newEmployee2 = new Qlnv(2, 'Thu_Ha', 'https://scr.vn/wp-content/uploads/2020/07/T%E1%BA%A3i-h%C3%ACnh-n%E1%BB%81n-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-1.jpg', '04/06/2021')

console.log(newEmployee1);
console.log(newEmployee1.getString());
arrEmployee.push(newEmployee1)
container.innerHTML = newEmployee1.getInfor()
function add() {
    let newEmployee = new Qlnv(inputId.value, inputName.value, inputImage.value, inputCreatedAt.value)
    console.log(newEmployee);
    arrEmployee.push(newEmployee)
    container.innerHTML = newEmployee.getInfor()

    getInfor()

}


const human = new Qlnv("123","Thu Ha","https://images.app.goo.gl/GTq9nLLnftwf1zAz5","18/12");
console.log(human.getString())

// bai3
/* Web components là một tập các quy chuẩn 
công nghệ dùng cho việc xây dựng các thành 
phần trang web được đóng gói (tách biệt với 
code còn lại của ứng dụng) và có thể tái sử dụng.
*/

/* Tai sao can : Công nghệ web đã và đang phát triển mạnh mẽ,
độ phức tạp do vậy ngày càng tăng cao. Điều này đem lại không
 ít đau đầu cho các nhà phát triển web, khi số lượng thành phần 
 trong một trang web ngày càng phình to và yêu cầu thì ngày một cao.
 */

 /*Custom Elements : Nói một cách đơn giản, đây là các thành phần HTML
  hợp lệ với các template, behaviors và tag name tùy chỉnh (ví dụ: <one-dialog> ) 
  được tạo bằng một bộ API JavaScript. Các thành phần tùy chỉnh được mô tả trong custom-element.

Shadow DOM : Có khả năng cô lập CSS và JavaScript, gần giống như <iframe> . 
Điều này được định nghĩa trong shadow-trees .

HTML templates : Các template do người dùng xác định trong HTML không được 
hiển thị cho đến khi được gọi. Thẻ <template> được xác định trong template-element .
*/

