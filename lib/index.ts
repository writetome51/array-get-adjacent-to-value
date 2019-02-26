import { errorIfNotInteger } from 'basic-data-handling/errorIfNotInteger';
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { getFirstIndexOf } from '@writetome51/array-get-indexes';
import { errorIfIndexNotValidAfterOffsetWasAdded } 
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndexNotValidAfterOffsetWasAdded';
import { ifIndexNotNegative_getActionResult }
	from '@writetome51/array-and-index-validation/ifIndexNotNegative_getActionResult';


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

export function getAdjacentToValue(info: IAdjacentToValueInfo, array): any[] {
	let offsetAndHowMany = [info.offset, info.howMany], i = -1;
	while (++i < offsetAndHowMany.length) errorIfNotInteger(offsetAndHowMany[i]);

	let index = getFirstIndexOf(info.value, array);
	return ifIndexNotNegative_getActionResult(index, () => {
		index += info.offset;
		errorIfIndexNotValidAfterOffsetWasAdded(index, array);
		return getAdjacentAt(index, info.howMany, array);
	});
}
