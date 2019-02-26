## getAdjacentToValue(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value: anyExceptObject,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;offset: integer,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany: integer_greater_than_zero<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Returns `howMany` adjacent items from `array`, starting with, or close to, `value`.  
Exactly where the selection starts is decided by `offset`, which is the position,  
relative to `value`, where to begin the selection. For example, if `offset` is 0,  
then the selection begins at `value`. If -1, it begins one place to the left of  
`value`. If 1, it begins one place to the right.

`array` is not modified.

Note: the function only works with the first found instance of `value`.


### Examples
```
let array = [1,3,5,7,9,11,13,15,17];

getAdjacentToValue({value: 7, offset: 0, howMany: 3},  array);
    // --> [7, 9, 11]

getAdjacentToValue({value: 7, offset: 2, howMany: 3},  array);
    // --> [11, 13, 15]


array = [1, 3, ['hello','goodbye'], 15, 17];

getAdjacentToValue(
    {value: ['hello','goodbye'], offset: -1, howMany: 2},  
    array
);
    // --> [ 3, ['hello','goodbye'] ]
```

### Installation
`npm i @writetome51/array-get-adjacent-to-value`

### Loading
```

```