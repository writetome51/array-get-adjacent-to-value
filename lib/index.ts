import { errorIfNotInteger } from 'error-if-not-integer';
import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
import { errorIfIndexNotValidAfterOffsetWasAdded }
	from 'error-if-index-not-valid-after-offset-was-added';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { IAdjacentToValueInfo }
	from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


// Returns array of adjacent items from passed array, starting with, or close to,
// the passed value.
//
// Example of usage:
//
// let array = [1,3,5,7,9,11,13,15,17];
// let result = getAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will be [7, 9, 11] .
// If offset was 2, for example, result would be [11, 13, 15]

export function getAdjacentToValue(info: IAdjacentToValueInfo, array): any[] {

	errorIfNotInteger(info.offset);
	let index = getFirstIndexOf(info.value, array);
	errorIfIndexIsNegative(index);

	index += info.offset;
	errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);

	return getAdjacentAt(index, info.howMany, array);
}
