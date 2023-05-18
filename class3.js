let arr = [1,2,3,4,5];
delete arr[0];
console.log(arr);
let b = arr.toString();
console.log(arr);
console.log(b);
let data = ["honey",'a',true,5.599,7658,"hai"];
console.log(data)
let c = data.toString();
console.log(c);
console.log(data.length);
console.log(arr.length);
console.log(data.sort());
console.log(arr[4]);
arr.shift();
console.log(arr);
delete arr;
console.log(arr);
data.push("hello");
console.log(data);
data.unshift("hai");
console.log(data);
const girls = ["honey","niha","maha","janu"];
console.log(girls);
const boys = ["sai","venkat","ravi","ramu"];
console.log(boys);
const child = girls.concat(boys);
console.log(child);
console.log(child.sort());
child.splice(2,0,"lohi","sanju");
console.log(child);
child.splice(2,2,"lohi","sanju");
console.log(child);
console.log(child.reverse());

//Date and Time(DIGITAL CLOCK)

let clock = setInterval(() => {
    let now = new Date();
    let hrs = now.getHours();
    let mts = now.getMinutes();
    let secs = now.getSeconds();
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
    if (mts < 10) {
      mts = "0" + mts;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }

    console.log(`${hrs}:${mts}:${secs}`);
  }, 3000);



/*OUTPUT
[ <1 empty item>, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
1,2,3,4,5
[ 'honey', 'a', true, 5.599, 7658, 'hai' ]
honey,a,true,5.599,7658,hai
6
5
[ 5.599, 7658, 'a', 'hai', 'honey', true ]
5
[ 2, 3, 4, 5 ]
[
  5.599,   7658,
  'a',     'hai',
  'honey', true,
  'hello'
]
[
  'hai', 5.599,
  7658,  'a',
  'hai', 'honey',
  true,  'hello'
]
[ 'honey', 'niha', 'maha', 'janu' ]
[ 'sai', 'venkat', 'ravi', 'ramu' ]
[
  'honey', 'niha',
  'maha',  'janu',
  'sai',   'venkat',
  'ravi',  'ramu'
]
[
  'honey', 'janu',
  'maha',  'niha',
  'ramu',  'ravi',
  'sai',   'venkat'
]
[
  'honey', 'janu',
  'lohi',  'sanju',
  'maha',  'niha',
  'ramu',  'ravi',
  'sai',   'venkat'
]
[
  'honey', 'janu',
  'lohi',  'sanju',
  'maha',  'niha',
  'ramu',  'ravi',
  'sai',   'venkat'
]
[
  'venkat', 'sai',
  'ravi',   'ramu',
  'niha',   'maha',
  'sanju',  'lohi',
  'janu',   'honey'
]

//OUTPUT FOR DATE AND TIME (DIGITAL CLOCK)
16:46:55
16:46:58
16:47:01
.
.
.

*/
