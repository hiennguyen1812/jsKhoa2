// firebase.firestore().collection("users").add({
//     name: "Nguyen Si Hien",
//     age: "22",
//     gender: "male",
//     birthday: "18/12/2000"
// });

const btnAdd = document.getElementById('btn-add')
const btnDelete = document.getElementById('btn-delete')
const btnUpdate = document.getElementById('btn-update')

loadHTML()

btnAdd.addEventListener('click', () => {
    add()
})

btnDelete.addEventListener('click', () => {
   deleData()
})

btnUpdate.addEventListener('click', () => {
   updateData()
});

//them

function add() {
    const inputName = prompt('Nhập tên: ')
    const inputAge = Number(prompt('Nhập tuổi: '))
    const inputMail = prompt('Nhập email: ')
    firebase.firestore().collection("users").add({
        name: inputName,
        age: inputAge,
        email: inputMail
    })
    var container = document.getElementById('container')
    container.innerHTML += `
        <div>
            <style>
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 30px;
                margin: 20px;
                border-radius: 5px;
            }
            
            .card img {
                border-top-right-radius: 5px;
                border-top-left-radius: 5px;
            }
            
            .card .infor {
                padding: 5px;
            }
            
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            </style>
            <link rel="stylesheet" href="style.css">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width: 100%">
            <div class="infor">
                <p><b>Name:</b> ${inputName}</p> 
                <p><b>Age:</b> ${inputAge}</p>
                <p><b>Email:</b> ${inputMail}</p> 
            </div>   
        </div>  
    `
}


//xoa

async function deleteData() {
    const result = await firebase.firestore().collection("users").get()
    const deleteName = prompt('Nhập tên người muốn xóa')
    result.docs.forEach((doc) => {
        if (doc.data().name === deleteName) {
            firebase.firestore().collection("users").doc(doc.id).delete()
        }
    })
    loadHTML()
}


async function loadHTML() {
    const container = document.getElementById('container')
    var strHTML = ''
    const result = await firebase.firestore().collection("users").get()
    for (let i = 0; i < result.docs.length; i++) {
        strHTML += `
            <div class="card">
                <link rel="stylesheet" href="style.css">
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width: 100%">
                <div class="infor">
                    <p><b>Name:</b> ${result.docs[i].data().name}</p> 
                    <p><b>Age:</b> ${result.docs[i].data().age}</p>
                    <p><b>Email:</b> ${result.docs[i].data().email}</p> 
                </div>   
            </div>
        `
    }
    container.innerHTML = strHTML
}
// async function getUsers () {
//     const result = await firebase.firestore().collection("users").get()
//     result.docs.forEach((doc) => {
//         getHTML(doc)
        
//     })
// }

// getUsers()

//updateData

async function updateData() {
    const result = await firebase.firestore().collection("users").get();
    const inputValueUpdate = prompt('Nhập vào tên muốn sửa: ')
    const inputNewName = prompt('Nhập tên mới: ')
    const inputNewAge = prompt('Nhập tuổi mới: ')
    const inputNewEmail = prompt('Nhập email mới: ')
    result.docs.forEach((doc) => {
        if (doc.data().name === inputValueUpdate) {
            firebase.firestore().collection("users").doc(doc.id).update({
                name: inputNewName,
                age: inputNewAge,
                email: inputNewEmail
            })
        }
    })
    loadHTML()
}
