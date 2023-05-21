// // prototypes

// let a = {
// name: 'mahalakshmi',
// age: 20,
// run:() => {
// console.log("Self learner!!!")
// }
// }
// console.log(a);
// let p ={
// run:()=>{
// console.log("Still learning!!!")
// }
// }
/*
// //its is prototype of prototype 
// p.__proto__={
// name:'maha'
// }
*/
// a.__proto__=p 
// a.run()
// console.log(a.name);

// // Inheritance example
/*
// class Animal{
// constructor(name,color){
// this.name = name;
// this.color = color;
// }
// run(){
// console.log(this.name+" is running");
// }
// shout(){
// console.log(this.name+" is barking");
// }
// }*/
/*
// class Monkey extends Animal{
// eatBanana(){
// console.log(this.name+" is eating banana");
// }
// hide(){
// console.log(`${this.name} is hiding`);
// }
// }
// let animal = new Animal("chotu",'cream')
// animal.run();
// animal.shout();
// let m = new Monkey("Chimpanzee",'Black');
// m.shout();
// m.run();
// m.eatBanana();
// m.hide(); */
// Super keyword
class Employee{
    constructor(name){
        console.log(`${name} - This is Employees constructor`);
        this.name = name;
    }
    login(){
        console.log(`Employee logged in`);
    }
    logout(){
        console.log(`Employee logged out`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leave - Auto approved`);
        }
}
class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log(`This is a new constructor`);
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffee`);
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log(`one extra leave granted`);
        console.log(`employee has requested ${leaves+1} leave (one Extra)`);
    }
}
let e = new Employee("Mahalakshmi");
e.login();
e.requestLeaves(3);
let e1 = new Programmer("maha");
e1.login();
e1.requestLeaves(3);
class Animal{
    constructor(name){
        this.name = Animal.capitalize(name);
    }
    walk(){
        alert
    }
    static capitalize(name){
    }
}
j = new Animal('jack')
/*
// a class can have more than one static keywords but it can access the last declared one
// window alert
// document object model -- replaces the html object
// browser object*/

/*
OUTPUT:
Mahalakshmi - This is Employees constructor
Employee logged in
Employee has requested 3 leave - Auto approved
maha - This is Employees constructor
This is a new constructor
Employee logged in
Employee has requested 4 leave - Auto approved
one extra leave granted
employee has requested 4 leave (one Extra)
*/
