// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string deep, on the fourth level, include the string deeper, and on the fifth level, include the string deepest.

let myNestedArray = [ // level 1
    // Only change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], // level 2
    [
    ['loop', 'shift', 6, 7, "deep", 'method'], // level 3
    [
        ['concat', false, "deeper", 'spread', 'array'], // level 4
    [
        ['mutate', 1327.98, 'splice', 'slice', "deepest"] // level 5
    ]
    ]
    ],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
  ];