import {readFileSync} from 'node:fs';

const lines = readFileSync("day02.txt", {encoding: "utf-8"})
    .replace(/\r/g, "")
    .trim()
    .split("\n")
    .map((e) => e.split(' '))

//console.log(lines)

// Appreciative of your help yesterday, one Elf gives you 
// an encrypted strategy guide (your puzzle input) that they 
// say will be sure to help you win. "The first column is 
// what your opponent is going to play: A for Rock, B for 
// Paper, and C for Scissors. The second column--" Suddenly, 
// the Elf is called away to help with someone's tent.

// The second column, you reason, must be what you should play
//  in response: X for Rock, Y for Paper, and Z for Scissors. 
//  Winning every time would be suspicious, so the responses 
//  must have been carefully chosen.

// Your total score is the sum of your scores for each round. 
// The score for a single round is the score for the shape you 
// selected (1 for Rock, 2 for Paper, and 3 for Scissors) plus 
// the score for the outcome of the round (0 if you lost, 3 if 
//     the round was a draw, and 6 if you won).

// Elf = A=Rock , B=Paper , C=Sci
// You = X=Rock, Y=Paper Z=Sci
/// you Y = need draw, X = need to lose, Z = need to win

// A Y
// B X
// C Z

let outcomes = {
    'A' : {
        'Y': 1,
        'X': 3,
        'Z': 2

    },
    'B' : {
        'Y': 2,
        'X': 1,
        'Z': 3

    },
    'C' : {
        'Y': 3,
        'X': 2,
        'Z': 1

    },
}

let determineShape = (elf, you) => {
    let score = 0;
    score += outcomes[elf][you];

    if(you === 'Y') score += 3;
    if(you === 'Z') score += 6;


    return score
}

/// you Y = need draw, X = need to lose, Z = need to win


console.log(determineShape('C', 'Z'))







let score = 0;



//console.log(determineScore('C', 'Y'))


let roundTotals = lines.map((e) => {
    return determineShape(e[0], e[1]);
})

//console.log(roundTotals)

let grandTotal = roundTotals.reduce((acc,curr) => {
    return acc + curr
})

/// you Y = need draw, X = need to lose, Z = need to win

console.log(grandTotal)





// let determineScore = (elf, you) => {

//     let roundScore = 0;
//     let shapeScore = 0;

//     if(elf === 'A') {
//         if(you === 'X') {
//             roundScore+= 3;
//             shapeScore+=1
//         }
//         if(you === 'Y') {
//             roundScore+=6;
//             shapeScore+=2
//         }
//         if(you === 'Z') {
//             shapeScore +=3;
//         }
//     }
//     if(elf === 'B') {
//         if(you === 'X') {
//             shapeScore+=1
//         }
//         if(you === 'Y') {
//             roundScore+=3;
//             shapeScore+=2
//         }
//         if(you === 'Z') {
//             roundScore+=6;
//             shapeScore +=3;
//         }
//     }

//     if(elf === 'C') {
//         if(you === 'X') {
//             roundScore+=6;
//             shapeScore+=1
//         }
//         if(you === 'Y') {
//             shapeScore+=2
//         }
//         if(you === 'Z') {
//             roundScore+=3;
//             shapeScore +=3;
//         }
//     } 
//     return roundScore + shapeScore
// }