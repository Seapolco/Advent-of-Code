import {readFileSync} from 'node:fs'


let testTerminal = readFileSync('day07-test.txt', {encoding:'utf-8'})
    .replace(/\r/g,"")
    .split('\n')

let terminal = readFileSync('day07.txt', {encoding:'utf-8'})
.replace(/\r/g,"")
.split('\n')

testTerminal.forEach((e) => console.log(e));

console.log(testTerminal)

let directoryNames = testTerminal.filter((e) => {
    return e.includes('$ cd ') && !e.includes('..')
})

//console.log(directoryNames)


//Take new approach

//First aim, create an object from all the data
// Using ls to determine when I am in another folder
// compare number of ls to cd.. to determine what level I am on
//store each dir in a object, and all directories recursively inside it
// get this figured out before moving on and trying to count the files.














// directoryNames.map((e,i) => {
//     directoryNames.splice(i, 1, e.slice(5) )
// })

// console.log(directoryNames);

// function enterDir(str) {
//     return  str.includes('$ cd ') && !str.includes('..') && str !== '$ cd /'
//    }
   
//    function findNum(str) {
//      return Number(str[0])
//    }
   
//    function sumArray(arr) {
//      let total = arr.reduce((acc,curr) => acc + curr)
//      return total
//    }

//    function exitDir(str) {
//     return str === '$ cd ..'
// }
   
   
   
   
//    let dirTracker = 0;
//    let directory = []
//    let totals = []
//    let dirObj = {};
//    let dirOne = []
//    let dirCount = 0;
//    let exitCount = 0;
//    let enteredDir = false;
   
//    let subTotal = [];
   
   
   
   
//    let tempArray = []

//    function dirExtras(arr) {  
//     let defa = arr.sort((a,b) => a-b)
  
//     let highest = defa.pop()
  
//     let differences = []
  
//     while(defa.length > 0) {
//       let tempdif = highest - defa[defa.length-1];
//       differences.push(tempdif)
//       defa.pop();
//     }
//     return sumArray(differences) + highest
//   }





//    for(let i = 0; i < terminal.length; i++ ) {
  
  
//     if(findNum(terminal[i])) {
//         let tempNum = terminal[i].split(' ')[0]
//         if(+tempNum < 100000) {
//           totals.push(+tempNum)
//           subTotal.push(+tempNum)
//         }
//     }
  
//    if(enterDir(terminal[i])) {
//      ++dirCount
//      directory.push(terminal[i])
   
//      if(i !== 0) {
//      if(totals.length > 0) {
//        let total = sumArray(subTotal) ///////////////////////////
//        tempArray.push(total)
//        //subtotals = [];
//        dirTracker++
//        enteredDir = false;
//      }
//    }
//    }
//    if(exitDir(terminal[i])) {
     
//     --dirCount
//    }
//    if(i !== 0) {
//      if(dirCount === 0 && totals.length > 0) {
//        let total = sumArray(totals)
//        tempArray.push(total)
      
//        if(tempArray.length > 1) {
//          let totalTotal = dirExtras(tempArray);
//          dirObj[dirTracker] = totalTotal;
//          totals = [];
//          tempArray = [];
//          dirTracker++
//        } else {
//         dirObj[dirTracker] = tempArray[0];
//        totals = [];
//        tempArray = [];
//        dirTracker++
//       // enteredDir = false;
//        }
//      }
//    }
  
// }
   
   
//    for(let i = 0; i < terminal.length; i++ ) {
     
     
//        if(findNum(terminal[i])) {
//            let tempNum = terminal[i].split(' ')[0]
//            if(+tempNum < 100000) {
//              totals.push(+tempNum)
//              subTotal.push(+tempNum)
//            }
//        }
     
//       if(enterDir(terminal[i])) {
//         ++dirCount
//         directory.push(terminal[i])
//         // console.log('enter', i, subTotal)
//         if(i !== 0) {
//         if(totals.length > 0) {
//           let total = sumArray(totals)
//           tempArray.push(total)
//           totals = [];
//           dirTracker++
//           enteredDir = false;
//         }
//       }
//       }
//       if(exitDir(terminal[i])) {
        
//        --dirCount
//       }
//       if(i !== 0) {
//         if(dirCount === 0 && totals.length > 0) {
//           let total = sumArray(totals)
//           tempArray.push(total)
//           dirObj[dirTracker] = tempArray;
//           totals = [];
//           tempArray = [];
//           dirTracker++
//           enteredDir = false;
//         }
//       }
     
// }


  




