"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match_1 = matches_1[_i];
    if (match_1[1] === 'Man United' && match_1[5] === 'H') {
        manUnitedWins++;
    }
    if (match_1[2] === 'Man United' && match_1[5] === 'A') {
        manUnitedWins++;
    }
}
console.log("MAN UNITED WON " + manUnitedWins + " GAMES");
