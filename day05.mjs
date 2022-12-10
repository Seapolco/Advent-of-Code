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
                crateObj[+index].push(char)
            } 
        }
     }
        index++
    }
})

//crateObj['1'].pop()
console.log(crateObj['1'])