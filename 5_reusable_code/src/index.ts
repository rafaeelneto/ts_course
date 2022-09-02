// this is a node standard funcion, so it should be using @types/node
// to properly work
import { match } from 'assert';
import fs from 'fs';

let manUnitedWins = 0;

// for (const match of matches) {
//   // SHOULD BE REFACTORED TO CLARIFY WHATS H AND A
//   // WITH THE USE OF ENUMS
//   if (match[1] === 'Man United' && match[5] === 'H') {
//     manUnitedWins++;
//   }
//   if (match[2] === 'Man United' && match[5] === 'A') {
//     manUnitedWins++;
//   }
// }

// ENUM
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

// ENUNS USES A NORMAL OBJECT LIKE SYNTAX
// THEY'RE USED TO INDICATE CLOSELY RELATED VALUES

// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }
// };

for (const match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

console.log(`MAN UNITED WON ${manUnitedWins} GAMES`);
