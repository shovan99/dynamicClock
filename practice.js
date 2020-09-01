// console.log("hii");
// const func1 = (name, function1) => {
// setTimeout(() => {
//     console.log(`Hey i'm talking to ${name}`);
//     function1();
// }, 2000);

// setInterval(() => {
//     console.log(`Hey i'm talking to ${name}`);
//     function1();
// }, 3000);

// }
// const funct2 = () => {
//     console.log("Hey i'm free now.")
// }
// func1("Shovan", funct2);

// FETCH API

// fetch('fruits.json').then((fruitsdata)=>{
//     return fruitsdata.json();
// }).then((actualData)=>{
//     const myData=actualData[1].name;
//     document.getElementById('pid').innerHTML= myData;
//     // console.log(actualData)
// }).catch((error)=>{
//     console.log(error);
// })

// TRY & CATCH

// try {
//     console.log("hiii")
// } catch (error) {
//     document.write(error.name);
// }
// finally{
//     document.write("Its necessery to run finally block")
// }

// FOR EACH

// const arr=[10,20,30,40,50];
// arr.forEach(function(value,index,arr){
//     // console.log(index + " --- "+value);
//     console.log((value+100))
// })

// SETS

// var mySet=new Set(); //empty set
// mySet.add("Shovan");
// mySet.add("Koli");
// mySet.add("Sourva");
// mySet.add("Najmul");
// mySet.add(1999);
// mySet.add("Biswadip");

// var ans= mySet.has("Shovan");
// document.write(ans);

// MAP

// const muyMap= new Map();
// const key1="STring",key2={},key3=function(){};
// muyMap.set(key1,"String");
// muyMap.set(key2,"Object");
// muyMap.set(key3,"Function");
// console.log(muyMap)

//Destructuring

// let a,b;
// [a,b]=[10,20]
// document.write(a,b);

// const Bio={
//     name: "Shovan",
//     // age: "21",
//     degree: "Btech",
//     func: function(){console.log("Function triggered")}
// }
// const{name,degree,func}=Bio;
// console.log(name,degree,func);

// CALLBACK HELL

// const func1 = () => {
//     setTimeout(() => {
//         var rollnp = [1, 2, 3, 4, 5];
//         console.log(rollnp);
//         setTimeout((roll) => {
//             const bio = {
//                 name: "SHovan",
//                 age: 21,
//                 gender: "male"
//             }
//             console.log(`my name is ${bio.name} and my age is ${bio.age}, my roll no is ${roll}.`);
//             setTimeout((details) => {
//                 console.log(`my gender is ${bio.gender}`)
//             }, 2000, bio.name);
//         }, 2000, rollnp[1]);
//     }, 2000);
// }

// func1();


// const funct1=(name)=>{
//     setTimeout(() => {
//       console.log(`my name is ${name}`);
//       setTimeout(() => {
//           console.log(`i'm talking to you later.`)
//       }, 3000);  
//     }, 3000);
// }

// funct1("Shovan");

// PromiSE

// const func1= ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let roll=[1,2,3,4,5];
//             resolve(roll);
//             reject("There are some error");  
//         }, 4000);
//     })
// }

// const func2=(indexdata)=>{
//     return new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         const bio = 
//         {
//             name: "SHovan",
//             age: 21,
//             gender: "male"
//         }
//         resolve(`my name is ${bio.name} and my age is ${bio.age}`)
//         // reject("Some error occured")
//       }, 4000,indexdata);  
//     })
// }

// const func3=(data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const bio1={
//                 gender: "male"
//             }
//            resolve(`my gender is ${bio1.gender}`) 
//         }, 4000,data);
//     })
// }

// func1().then((data)=>{
//     console.log(data);
//     return func2(data[2]);
// }).then((data2)=>{
//     console.log(data2)
//     return func3(data2);
// }).then((data3)=>{
//     console.log(data3)
// }).catch((error)=>{
//     console.log(error);
// })

// ASYNC AND AWAIT

// const func1=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//           let roll_no=[12,13,14,151,16];
//             resolve(roll_no);
//             reject("Some error occured");
//         }, 3000);
//     });
// }

// const func2=(indexOfroll)=>{
//     return new Promise((resolve,reject)=>{
//         const Bio={
//             name: "Shovan",
//             age: 21, 
//             gender: "male"
//         }
//         setTimeout(() => {
//           resolve(`my roll no is ${indexOfroll} and my name & age is ${Bio.name} ${Bio.age}`)  
//         }, 3000, indexOfroll);
//     });
// }

// async function getdata(){
//     const first=await func1();
//     console.log(first);
//     const second=await func2(first[2]);
//     console.log(second)
// }

// getdata();
console.log("Hiii")
var time = new Date().toLocaleTimeString();

document.getElementById('pid').innerHTML = time;

var btnOne = document.getElementById('btn');
btnOne.addEventListener('click',stopTime);
function stopTime(){
    clearInterval(clear);
}



var clear=setInterval(() => {
    // function updateTime(){
    var time1 = new Date().toLocaleTimeString();
    time = time1;
    document.getElementById('pid').innerHTML = time;
    //    console.log("clicked")
    //    }
}, 1000);
































