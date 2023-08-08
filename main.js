function sum(num,num2){
    console.log(num+num2)

}

function sub(num,num2){
    console.log(num-num2)

}
function mult(num,num2){
    console.log(num*num2)

}
function div(num,num2){
    console.log(num/num2)

}
sum(10,5)
sub(10,5)
mult(10,5)
div(10,5)


console.log("\n")
console.log("\n")
// array

let arr=[1,2,3,4,5,6,7];
console.log(arr[4])

console.log("\n")
console.log("\n")

// even and odd using filter


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let newA= evenNumbers = numbers.filter(function(currentValue) {
    return currentValue % 2 == 0
   
});
console.log(newA);

let newAb= oddNumbers = numbers.filter(function(currentValue) {
    return currentValue % 2 != 0
   
});
console.log(newAb);

console.log("\n")
console.log("\n")

 numbers.forEach(function (x,i){
    numbers[i]  =x*2   
});
console.log(numbers);

console.log("\n")
console.log("\n")

console.log(numbers.includes(40));
console.log(numbers.reverse());

const sorted=numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);


console.log("\n")
console.log("\n")
console.log("\n")
console.log("lab")




const characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 166,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];

  console.log("find ------------")
console.log("eye color blue-------");
let test1= characters.find(function(currentValue) {
    return currentValue.eye_color=="blue"
    
});

console.log(`the first name is Leia`)
console.log("Mass over 50------");
let test2=  characters.find(function(currentValue) {
    return currentValue.mass>50
    
});
console.log(" first gender higher than 50: male")

console.log("\n");
console.log("\n");


// filter
console.log("hight more than 200");

let test3=  characters.filter(function(currentValue) {
    return currentValue.height>200
    
});
console.log(test3)

console.log("all male");
let test4=  characters.filter(function(currentValue) {
    return currentValue.gender== "male"
    
});
console.log(test4)


console.log("\n");
console.log("\n");


// map
console.log("all names")
const map1 = characters.map(function(currentValue) {  
    return currentValue.name
  })
  console.log(map1)
  console.log("all hights")
  const map2 = characters.map(function(currentValue) {  
      return currentValue.height
    })
    console.log(map2)


console.log("\n");
console.log("\n");


console.log("sort by mass l to h")
const sorted1=characters.sort(function(a,b){
   return a.mass-b.mass;
});
console.log(sorted1);
console.log("sort by hight h to l")
const sorted2=characters.sort(function(a,b){
   return b.height-a.height;
});
console.log(sorted2);


console.log("\n");
console.log("\n");

// is every
const isEvery = characters.every(function (value){
    return value.mass>40
});
console.log(isEvery)

const isEvery1 = characters.every(function (value){
     return value.height<200
});
console.log(isEvery1)

// some
const some = characters.some(function (value){
    return value.eye_color=="blue"
});
console.log(some)
const some1 = characters.some(function (value){
    return value.height>210
});
console.log(some1)




