import {readFileSync} from "node:fs";

const lines = readFileSync('day05.txt', {encoding: 'utf-8'})
    .replace(/\r/g, "")
    .split('\n');

const crates = lines.slice(0,8)

const instructions = lines.slice(9);

let crateObj = {};

let cratePositions = [];

let pos = 1;

for(let i = 0 ; i < 9; i++) {
    
    cratePositions.push(pos)
    pos+=4
}


crates.forEach((e) => {
    let index = 0;
    for(let char of e) {
        if(cratePositions.includes(index)) {
            //console.log(index);
            //console.log(char)
        if(char != false) {
            if(crateObj[index] === undefined) {
                crateObj[index] = [char]
            } else {
                crateObj[+index].unshift(char)
            } 
        }
     }
        index++
    }
})

let indexs= [1,2,3,4,5,6,7,8,9]

for(let key in crateObj) {
  let index = indexs.shift()
  console.log(index)
  crateObj[index] = crateObj[key]
  if(index !== 1) {
    delete crateObj[key]
  }
}

//crateObj['1'].pop()
//console.log(crateObj)

console.log(instructions)

const instrucNums = (instruction) => {
    let nums = instruction.split(' ').filter((e) => Number(e)).join(',')
    return nums.split(',').map((e) => +e)
  }

instructions.shift();
// console.log(instructions[0])

// instructions.forEach((e) => {
//     console.log(instrucNums(e))
// })

let simples = instructions.map((e) => instrucNums(e))

//console.log(simples)

//Part one orders

// function elfOrders(arr, obj){
//     let moveCount = arr[0];
    
//     while(moveCount > 0) {
//       obj[arr[2]].push(obj[arr[1]].pop())
//       moveCount--
//     }
// }


function elfOrders(arr, obj){
    let moveCount = arr[0];
    
    let holdingBay = []
    
    while(moveCount > 0) {
      holdingBay.push(obj[arr[1]].pop())
      moveCount--
    }
    holdingBay.reverse();
    obj[arr[2]] = obj[arr[2]].concat(holdingBay)
  }

simples.forEach((e) => elfOrders(e, crateObj));

console.log(crateObj)

