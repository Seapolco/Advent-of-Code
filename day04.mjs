import {readFileSync} from 'node:fs';

const lines = readFileSync('day04.txt',{encoding: 'utf-8'})
        .replace(/\r/g, "")
        .split('\n')
        .map((e) => e.split(','))
        .map((e) => (
            e.map(arr => arr.split('-'))
        ))

let total = 0;

function findOverlap(leftarr, rightarr) {
    if(+leftarr[0] <= +rightarr[0]) {
      if(+leftarr[1] >= +rightarr[1]){
        return true;
      }
    }
      if(+rightarr[0] <= +leftarr[0]) {
      if(+rightarr[1] >= +leftarr[1]){
        return true;
      }
    }
    if(+leftarr[0] >= +rightarr[0] && +leftarr[0] <= +rightarr[1]) return true
     if(+leftarr[1] >= +rightarr[0] && +leftarr[1] <= +rightarr[1]) return true
    return false
  }

  lines.forEach((e) => {
    findOverlap(e[0], e[1]) && total++;
        
  })


console.log(total)



