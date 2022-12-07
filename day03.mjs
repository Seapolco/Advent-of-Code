import {readFileSync} from 'node:fs';

const splitter = (str) => { 
    let index = Math.floor(str.length / 2);
    let firstHalf = str.slice(0,index);
    let secondHalf = str.slice(index);
    return [firstHalf, secondHalf]
}

const elvenError = (arr) => {
    let sillyElf; // who gives zero damns about time complexity
   
   for(let i = 0; i < arr[0].length; i++) {
     for(let j = 0; j <arr[1].length; j++) {
        for(let k = 0; k<arr[2].length; k++) { // to infinity and beyond!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if(arr[0][i] === arr[1][j] && arr[1][j] === arr[2][k]) {
                sillyElf = arr[0][i]
              }
        }
     }
   }
   
   return sillyElf  // whilst it jumps and skips through the rain caused
                    //by the tears of a thousand Big O Gods.
}
const  getPosition = (letter) => { 
    if(letter.toLowerCase() === letter) {
        return  letter.charCodeAt(0) - 96
    } else {
        return letter.charCodeAt(0) - 38
    }
}

let elveParty = (arr) => {
    let triElvite = [];
    let temp = []
    for(let i = 0; i< arr.length; i++) {
      temp.push(arr[i])
      if((i+1) % 3 === 0) {
        triElvite.push(temp);
        temp = []
      }; 
    }
      return triElvite
    }

const lines = readFileSync("day03.txt", {encoding: "utf-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n")


    //console.log(lines)

let treeElves = elveParty(lines);

//console.log(treeElves)

let elveAuth = treeElves.map((e) => {
    return getPosition(elvenError(e));
})

let totalElveAuthScore = elveAuth.reduce((acc,curr) => acc + curr)



console.log(totalElveAuthScore)
























// ========================= P A R T      O N E ========================



// import {readFileSync} from 'node:fs';

// const splitter = (str) => { 
//     let index = Math.floor(str.length / 2);
//     let firstHalf = str.slice(0,index);
//     let secondHalf = str.slice(index);
//     return [firstHalf, secondHalf]
// }

// const elvenError = (arr) => {
//     let sillyElf; // who gives zero damns about time complexity
   
//    for(let i = 0; i < arr[0].length; i++) {
//      for(let j = 0; j <arr[1].length; j++) {
//        if(arr[0][i] === arr[1][j]) {
//          sillyElf = arr[0][i]
//        }
//      }
//    }
   
//    return sillyElf  // whilst it jumps and skips through the rain caused
//                     //by the tears of a thousand Big O Gods.
// }
// const  getPosition = (letter) => { 
//     if(letter.toLowerCase() === letter) {
//         return  letter.charCodeAt(0) - 96
//     } else {
//         return letter.charCodeAt(0) - 38
//     }
// }

// const lines = readFileSync("day03.txt", {encoding: "utf-8"})
//     .replace(/\r/g, "")
//     .trim()
//     .split("\n")
//     .map((e) => {
//         return splitter(e)
//     })
//     .map((e) => {
//         return elvenError(e)
//     })
//     .map((e) => {
//         return getPosition(e)
//     })
//     .reduce((acc,curr) => {
//         return acc + curr
//     })

//     console.log(lines)










// const splitter = (str) => {
//     let index = Math.floor(str.length / 2);
//     let firstHalf = str.slice(0,index);
//     let secondHalf = str.slice(index);
//     return [firstHalf, secondHalf]
//   }


