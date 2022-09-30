import { MatchResult } from './MatchResult';

import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

let manUnitedWins = 0;

const csvReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvReader);
matchReader.load();

for (const match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`MAN UNITED WON ${manUnitedWins} GAMES`);
