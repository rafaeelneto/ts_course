"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
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
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// ENUNS USES A NORMAL OBJECT LIKE SYNTAX
// THEY'RE USED TO INDICATE CLOSELY RELATED VALUES
// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }
// };
var csvReader = new CsvFileReader_1.default('football.csv');
csvReader.read();
for (var _i = 0, _a = csvReader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("MAN UNITED WON ".concat(manUnitedWins, " GAMES"));
