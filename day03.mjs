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
       if(arr[0][i] === arr[1][j]) {
         sillyElf = arr[0][i]
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

const lines = readFileSync("day03.txt", {encoding: "utf-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((e) => {
        return splitter(e)
    })
    .map((e) => {
        return elvenError(e)
    })
    .map((e) => {
        return getPosition(e)
    })
    .reduce((acc,curr) => {
        return acc + curr
    })

    console.log(lines)






let total = 0;



// const splitter = (str) => {
//     let index = Math.floor(str.length / 2);
//     let firstHalf = str.slice(0,index);
//     let secondHalf = str.slice(index);
//     return [firstHalf, secondHalf]
//   }


