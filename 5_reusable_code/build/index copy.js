"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
var manUnitedWins = 0;
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
// ENUNS USES A NORMAL OBJECT LIKE SYNTAX
// THEY'RE USED TO INDICATE CLOSELY RELATED VALUES
// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }
// };
var csvReader = new MatchReader_1.MatchReader('football.csv');
csvReader.read();
for (var _i = 0, _a = csvReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("MAN UNITED WON " + manUnitedWins + " GAMES");
