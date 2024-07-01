// console.log("Hi Welcome");
// a=8;
// // var -> global scope
// var a=8;
// let g=true;
// // const and let cannot redeclare
// // let cannot redeclare in declared blocks
// // let g=12;
// {
//     var a=23;
//     let g=34;
//     console.log(g)

// }
// console.log(a)
// console.log(typeof(g))

// Javascript Objects

// let person={
//     name:"Maya",
//     age:22,
//     location:"TVM"
// }

// console.log(person.name)

// let arr=['Heera','jai',10] 
// // can have various types in an arr
// arr.push(4);
// console.log(arr[3]);
// console.log(arr.length);
// arr.pop();
// console.log(arr[3]);

// let arr_obj=[{age:23,location:'tvm'},{age:43,location:'kochi'}]
// console.log(arr_obj[1].location);

// function add(a,b) {
//     var sum=a+b;
//     return sum
// }
// var s=add(20,30);
// console.log(s)

var a=1;
var b=a++;
console.log(b)

var a=1;
var b=++a;

var a1=45;
var a2="45";
console.log(b)
 if (a1>a2) {
    console.log("a1 is greater")

 } else if(a1==a2){
    console.log("a1 is equal to a2 and the value is "+ a1)
 }
 else {
    console.log("a2 is greater")
 }

arr2=[10,20,30,40,50]
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// for (const i in arr2){
//     console.log(arr2[i])
// }


for (const i in arr2){
    console.log(i)
}