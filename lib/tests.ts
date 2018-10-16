import { getAdjacentToValue } from '../../getAdjacentToValue';
import { isArray } from 'basic-data-handling/isArray_notArray';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: if offset is 0, first item in returned array must be value.
let result = getAdjacentToValue({value: 1, offset: 0, howMany: 3}, arr);
if (isArray(result) && result[0] === 1 &&
	result.length === 3) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: if offset is 3, first item in returned array must be 3 places to right of
// value.
result = getAdjacentToValue({value: 1, offset: 3, howMany: 3}, arr);
if (isArray(result) && result[0] === 4 &&
	result.length === 3) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: if offset is -3, first item in returned array must be 3 places to
// left of value.
result = getAdjacentToValue({value: 6, offset: -3, howMany: 5}, arr);
if (isArray(result) && result[0] === 3 && result[4] === 7 &&
	result.length === 5) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: if negative offset asks for an out-of-range index, error is triggered:
let errorTriggered = false;
try {
	result = getAdjacentToValue({value: 3, offset: -3, howMany: 5}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed');


// Test 5: if positive offset asks for an out-of-range index, error is triggered:
errorTriggered = false;
try {
	result = getAdjacentToValue({value: 6, offset: 5, howMany: 1}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 failed');


// Test 6: if howMany goes beyond the array's length, error is triggered:
errorTriggered = false;
try {
	result = getAdjacentToValue({value: 6, offset: 0, howMany: 6}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 failed');


// Test 7: if value is not found in array, error is triggered:
errorTriggered = false;
try {
	result = getAdjacentToValue({value: 0, offset: 0, howMany: 1}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed');


// Test 8: value is allowed to be an array.  If error is NOT triggered, it passes:
errorTriggered = false;
try {
	result = getAdjacentToValue({value: [], offset: 0, howMany: 1}, [1, 2, 3, [], 4]);
}
catch (e) {
	errorTriggered = true;
}
if (!errorTriggered) console.log('test 8 passed');
else console.log('test 8 failed');