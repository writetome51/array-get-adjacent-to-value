"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotInteger_1 = require("basic-data-handling/errorIfNotInteger");
var error_if_index_is_negative_1 = require("error-if-index-is-negative");
var error_if_index_not_valid_after_offset_was_added_1 = require("error-if-index-not-valid-after-offset-was-added");
var array_get_adjacent_at_1 = require("@writetome51/array-get-adjacent-at");
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
// Returns array of adjacent items from passed array, starting with, or close to,
// the passed value.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will be [7, 9, 11] .
// If offset was 2, for example, result would be [11, 13, 15]
function getAdjacentToValue(info, array) {
    errorIfNotInteger_1.errorIfNotInteger(info.offset);
    errorIfNotInteger_1.errorIfNotInteger(info.howMany);
    var index = array_get_indexes_1.getFirstIndexOf(info.value, array);
    error_if_index_is_negative_1.errorIfIndexIsNegative(index);
    index += info.offset;
    error_if_index_not_valid_after_offset_was_added_1.errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    return array_get_adjacent_at_1.getAdjacentAt(index, info.howMany, array);
}
exports.getAdjacentToValue = getAdjacentToValue;
