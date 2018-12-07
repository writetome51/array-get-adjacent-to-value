# getAdjacentToValue(info,  array): any[]

Returns adjacent items from `array`, starting at, or close to, a value specified  
in `info`.  Does not modify `array`.  
`info` is an object that looks like this:  
```
{
   value: any except object (it's the value being searched for), 
   offset: integer, specifying where, in relation to value, to begin selecting adjacent 
        items to return. I.E.: If 0, it begins at value. If -1, it begins 1 place to 
        the left of value. If 1, it begins 1 place to right of value.  Can be any integer.
   howMany: integer greater than zero (it's how many adjacent items to return)
}
```

Examples of usage:
```
let array = [1,3,5,7,9,11,13,15,17];

let result = getAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
// result will be [7, 9, 11]

let result = getAdjacentToValue({value: 7, offset: 2, howMany: 3},  array);
// result will be [11, 13, 15]

let result = getAdjacentToValue({value: 7, offset: -2, howMany: 2},  array);
// result will be [3, 5]

let result = getAdjacentToValue({value: 11, offset: -1, howMany: 2},  array);
// result will be [9, 11]

let result = getAdjacentToValue({value: 5, offset: 0, howMany: 4},  array);
// result will be [5, 7, 9, 11]
```