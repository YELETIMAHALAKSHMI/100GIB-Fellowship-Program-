//let person = {firstname:"mahalakshmi",lastname:"yeleti",age:20,height:5.4};
const person = new Object();
person.firstname = "mahalakshmi";
person.lastname = "yeleti";
person.age = 20;
person.height = 5.4;
console.log(person);
// will not create a copy of person
const y = person; 
y.age = 20;
console.log(person);
console.log(y);
// To access properties
console.log(person.firstname);
console.log(person["lastname"]);
//using for loop
let text = "";
for(let i in person){
    text += person[i] +" ";
}
console.log(text);
let text1 = "";
for(let i in person){
    text1 += person[i];
}
console.log(text1);

/*OUTPUT
{ firstname: 'mahalakshmi', lastname: 'yeleti', age: 20, height: 5.4 }
{ firstname: 'mahalakshmi', lastname: 'yeleti', age: 20, height: 5.4 }
{ firstname: 'mahalakshmi', lastname: 'yeleti', age: 20, height: 5.4 }
mahalakshmi
yeleti
mahalakshmi yeleti 20 5.4 
mahalakshmiyeleti205.4
*/
