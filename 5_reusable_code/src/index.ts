import { MatchResult } from './MatchResult';

import { MatchReader } from './MatchReader';

let manUnitedWins = 0;

const csvReader = new MatchReader('football.csv');
csvReader.read();

for (const match of csvReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`MAN UNITED WON ${manUnitedWins} GAMES`);
