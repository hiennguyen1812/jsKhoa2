// data = [{
// 	name: 'Si Hien',
// 	age : 20,
// 	img : './img/1.png'
// 	},

// {
// 	name: 'Hai Ha',
// 	age : 20,
// 	img : './img/2.png'
// },

// {
// 	name: 'The Dat',
// 	age : 20,
// 	img : './img/3.png'
// },

// {
// 	name: 'Thu Ha',
// 	age : 20,
// 	img : './img/4.jpg'
// },

// {
// 	name: 'Diem Quynh',
// 	age : 20,
// 	img : './img/5.png'

// },

// {
// 	name: 'My Linh',
// 	age : 20,
// 	img : './img/6.png'
// }]

// let cardInfo = document.getElementById("card_info")
// let userName = document.getElementById('input-name')
// let userAge = document.getElementById('input-age')
// let btnAdd = document.getElementById('btn-add')
// var newObj = []

// btnAdd.addEventListener('click',addUser)

// function readObj(){
// for(let people of users){
// 	let card = `<img src="${people.img}" alt="Avatar" style="width:100%"
// 	<div class="container">
//             <p><b>Name:</b> ${people.name}</p> 
//             <p><b>Age:</b> ${people.age}</p>
//             <p><b>Created at:</b> ${people.created_at}</p>
//         </div>`
    
//     cardInfo.innerHTML += card
// 	}
// 	users.splice(0,users.length)
// }

// readObj()

// function getDate() {
//     let stringDate = "";
//     let newTime = new Date();
//     stringDate += String(newTime.getDate()) + "-" + (Number(newTime.getMonth()) + 1) + "-" + newTime.getFullYear();
//     return stringDate;
// }

// function addUser() {
//     users.push({
//         name: `${userName.value}`,
//         age: `${userAge.value}`,
//         created_at: getDate(),
//         img: 'https://www.w3schools.com/howto/img_avatar.png'
//     })
//     newObj.push = (users)
//     readObj()
// }

class students {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name
	}

	set age() {
		return this._age
	}

	set name(value) {
		this._name = value
	}

	set age(value) {
		this._age = value 
	}
}
	let listStudents = []

	let newName = prompt("Nhap ten")
	let newAge = prompt("Nhap tuoi")

	const newStudent = new students(newName, newAge);

	listStudents.push(newStudent);
	console.log(listStudents);

	alert(` ${listStudents[0].name} and ${listStudents[0].age}`)

// 
class Phuong_tien{
	constructor(banhxe, taycam , mauson){
		this._banhxe = banhxe;
		this._taycam = taycam;
		this._mauson = mauson;
	}
	get banhxe(){
		return this._banhxe;
	}

	set banhxe(value){
		this._banhxe = value;
	}

	get taycam() {
		return this._taycam;
	}

	set taycam(value){
		this._taycam = value
	}

	get mauson() {
		return this.mauson;
	}

	set mauson(value){
		this.mauson = value
	}
}
class car extends Phuong_tien {
	constructor(banhxe, taycam, mauson,guong){
		super(banhxe, taycam, mauson)
		this._guong = guong;
	}

	get guong() {
		return this.guong;
	}

	set guong(value){
		this._guong = value
	}
}

class plane extends Phuong_tien {
	constructor(banhxe, taycam, mauson,canh){
		super(banhxe, taycam, mauson)
		this._canh = canh;
	}

	get canh() {
		return this.canh;
	}

	set canh(value){
		this._canh = value
	}
}

class poscher extends Phuong_tien {
	constructor(banhxe, taycam, mauson,cuatudong){
		super(banhxe, taycam, mauson)
		this.cuatudong = cuatudong;
	}

	get cuatudong() {
		return this._cuatudong;
	}

	set cuatudong(value){
		this._cuatudong = value
	}
}

// //bai cua anh giang vien
// // 1, encapsulation - tính bao đóng

// class Human {
//   constructor(name, age) {
//     this._name = name;
//     this._age = age;
//   }

//   /* Encapsulation */
//   set name(value) {
//     this._name = value;
//   }
//   get name() {
//     return this._name;
//   }

//   set age(value) {
//     this._age = value;
//   }
//   get age() {
//     return this._age;
//   }
//   /* -- */

//   walk() {
//     return `${this._name} is walking`;
//   }

//   /* Polymorphism */
//   getString() {
//     return `${this._name} is ${this._age} year old`;
//   }

//   /* -- */
// }

// // child class
// class Employee extends Human {
//   constructor(name, age, subject) {
//     super(name, age);
//     this._subject = subject;
//   }
//   get subject() {
//     return this._subject;
//   }
//   set subject(value) {
//     this._subject = value;
//   }
  
  
//   getString() {
//     return `${this._name} is ${this._subject} man`;
//   }
// }

// class Animal {
//   //abstractfunction
//   speak() {
//     throw "Subclass must implement abstract method";
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super();
//     this._name = name;
//   }

//   speak() {
//     console.log("meo meo");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super();
//     this._name = name;
//   }

//   speak() {
//     console.log("go go");
//   }
// }

// const newCat = new Cat("nnn");
// const newDog = new Dog("nnn");
// // newCat.speak();
// // newDog.speak();

// const human = new Human("nnn", 1);

// const clara = new Employee("Clara", 33, "indigo");

// console.log(human.getString());
// console.log(clara.getString());
