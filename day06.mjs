import {readFileSync} from 'node:fs';

const dataStream = readFileSync('./day06.txt', {encoding : 'utf-8'})
        .replace(/\r/g,"")
        .split('');



let marker;

for(let i = 0; i < dataStream.length; i++) {

    let temp = [];

    for(let j = 0; j < 14; j++) {
        temp.push(dataStream[i+j])
    }
    let tempset = new Set(temp);

    if(tempset.size === 14) {
        marker = i  + 14;
        break;
    } 
}

console.log(marker)