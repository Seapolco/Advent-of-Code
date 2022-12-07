import {readFileSync} from 'node:fs';

const lines = readFileSync("day01.txt", {encoding: "utf-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n\n")
    .map((e) => e.split('\n'))
    //.map(Number);

console.log(lines)

//let newLines = lines.map((e) => e.split('\n'))

//console.log(newLines)

let totals = lines.map((e) => {
   return e.reduce((acc,curr) => {
       return acc += Number(curr)
    },0)
})

console.log(totals)

console.log(Math.max(...totals))

let count = 0;

let topThree = []

while(count < 3) {
    let tempMax = Math.max(...totals);
    totals.splice(totals.indexOf(tempMax),1);
    topThree.push(tempMax);
    count++
}

console.log(topThree.reduce((acc,curr) => acc + curr))





