"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var errorIfIndexNotValidAfterOffsetWasAdded_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded");
var ifIndexNotNegative_getActionResult_1 = require("@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult");
// Returns array of adjacent items from passed array, starting with, or close to,
// the passed value.
// Check interface IAdjacentToValueInfo for more info on how to use this.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will be [7, 9, 11] .
// If offset was 2, for example, result would be [11, 13, 15]
function getAdjacentToValue(info, array) {
    var offsetAndHowMany = [info.offset, info.howMany], i = -1;
    while (++i < offsetAndHowMany.length)
        errorIfNotInteger_1.errorIfNotInteger(offsetAndHowMany[i]);
    var index = array_get_indexes_1.getFirstIndexOf(info.value, array);
    return ifIndexNotNegative_getActionResult_1.ifIndexNotNegative_getActionResult(index, function () {
        index += info.offset;
        errorIfIndexNotValidAfterOffsetWasAdded_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array);
        return array_get_adjacent_at_1.getAdjacentAt(index, info.howMany, array);
    });
}
exports.getAdjacentToValue = getAdjacentToValue;
