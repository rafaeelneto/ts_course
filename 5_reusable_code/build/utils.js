"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToDate = void 0;
var stringToDate = function (s) {
    var dateArr = s.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
exports.stringToDate = stringToDate;
