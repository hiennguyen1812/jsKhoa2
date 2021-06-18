
// class students {
// 	constructor(name, age){
// 		this._name = name;
// 		this._age = age;
// 	}

// 	get name(){
// 		return this._name
// 	}

// 	get age() {
// 		return this._age
// 	}

// 	set name(value) {
// 		this._name = value
// 	}

// 	set age(value) {
// 		this._age = value 
// 	}
// }
// 	let listStudents = []

// 	let newName = prompt("Nhap ten")
// 	let newAge = prompt("Nhap tuoi")

// 	const newStudent = new students(newName, newAge);

// 	listStudents.push(newStudent);
// 	console.log(listStudents);

// 	alert(` ${listStudents[0].name} and ${listStudents[0].age}`)

 
// class Phuong_tien{
// 	constructor(banhxe, taycam , mauson){
// 		this._banhxe = banhxe;
// 		this._taycam = taycam;
// 		this._mauson = mauson;
// 	}
// 	get banhxe(){
// 		return this._banhxe;
// 	}

// 	set banhxe(value){
// 		this._banhxe = value;
// 	}

// 	get taycam() {
// 		return this._taycam;
// 	}

// 	set taycam(value){
// 		this._taycam = value
// 	}

// 	get mauson() {
// 		return this.mauson;
// 	}

// 	set mauson(value){
// 		this.mauson = value
// 	}
// }
// class car extends Phuong_tien {
// 	constructor(banhxe, taycam, mauson,guong){
// 		super(banhxe, taycam, mauson)
// 		this._guong = guong;
// 	}

// 	get guong() {
// 		return this.guong;
// 	}

// 	set guong(value){
// 		this._guong = value
// 	}
// }

// class plane extends Phuong_tien {
// 	constructor(banhxe, taycam, mauson,canh){
// 		super(banhxe, taycam, mauson)
// 		this._canh = canh;
// 	}

// 	get canh() {
// 		return this.canh;
// 	}

// 	set canh(value){
// 		this._canh = value
// 	}
// }

// class poscher extends Phuong_tien {
// 	constructor(banhxe, taycam, mauson,cuatudong){
// 		super(banhxe, taycam, mauson)
// 		this.cuatudong = cuatudong;
// 	}

// 	get cuatudong() {
// 		return this._cuatudong;
// 	}

// 	set cuatudong(value){
// 		this._cuatudong = value
// 	}
// }

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

