// var numbers=[1,5,4,7,6]

// iterator=0;

// do {
//       console.log(numbers[iterator])
//       iterator++;
// } while (iterator<numbers.sort().length)
//  for (var i=0;i<numbers.length;i++){
//      console.log(numbers[i])
//  }
// for (var i of numbers){
//     console.log(i)
// }
// var person= {
//     name:"farid",
//     age:30,
//     adress:"azerbaijan,baku",
// }
// for (var key in person){
//     console.log(key,person[key])
// }
// function sum(a,b){
    
//     a=parseInt(a)
//     b=parseInt(b)
//     var s=a + b
//     return s
     
// }
// function farid(){
//    var num1=prompt("1 ci ededi daxil edin: ")
   
//    return num1
   

// }
// function fardi(){
// var num2=prompt("2 ci ededi daxil edin: ")
//    return num2
// }







// alert("ededlerin cemi " + sum(farid(),fardi()) );

// var a=5 
// function far(){
//      a++
//      return a
// }

// console.log(far())
// console.log(a)
// document.getElementById("object").innerText="my object has changed"
// // var a=document.querySelectorAll(".f")[2]
// // a.innerText="salam"


// a.forEach(l => {l.innerText = "salam"
     
// });
const a=document.getElementById("button")
const b=document.getElementById("messages")
a.addEventListener("click", ()=>{
   
    b.classList.toggle("red")
    
})



