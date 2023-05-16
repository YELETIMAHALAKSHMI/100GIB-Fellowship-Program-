let n = prompt("enter a number : ");
console.log(n);
console.log(+"200");
console.log(+false);
console.log(+"hello");
console.log(+"32+90");

//Fizzbuzz using ternary operator

for(let i=1;i<=n;i++){
    let a = i%3==0, b = i%5==0;
    console.log(a?(b?'FizzBuzz':'Fizz'):b?'Buzz':i);
}

//STRINGS

let name = "MAHA";
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}
console.log(name[3]);

const name1 = "mahalakshmi";
const data =`Hello!! Good morning, ${name1}. How are you ${name1}???.
             how is your day?? Have you enjoyed the todays class, ${name1}`;
console.log(data);

var s1 = "HellO WorLd";
var s2 = s1.toLowerCase();
console.log(s2);
var s3 = s1.toUpperCase();
console.log(s3);
var s4 = s1.slice(1,8);
console.log(s4);
var s5 = s1.slice(4,);
console.log(s5);
console.log(s4,s5);
console.log(s1.replace("WorLd","honey"));

//Functions

function cube(a){
    return a*a*a;
}
console.log(cube(3));

function product(a,b){
    return a*b;
}
console.log(product(3,4));

var result = product.call(this,5,6);
console.log(result);

let greet = x => console.log(x);
greet("hello");

let add = (a,b) => {
    let res = a+b;
    return res;
}
console.log(add(3,4));

/*
OUTPUT:
enter a number : 20
20
200
0
NaN
NaN
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
M
A
H
A
A
Hello!! Good morning, mahalakshmi. How are you mahalakshmi???.
             how is your day?? Have you enjoyed the todays class, mahalakshmi
hello world
HELLO WORLD
ellO Wo
O WorLd
ellO Wo O WorLd
HellO honey
27
12
30
hello
7
*/
