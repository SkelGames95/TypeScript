// Readonly in arrays:
var thisArray = ["this", "is", "readonly"];
// they are the same
var thusArray = ["this", "is", "readonly"];
// this way we defined the exact number of elements inside the array and their types, making the array readonly
// we can also use this tuple as a sub-type, making all the contained elements tuples:
var arr = [
    ["China", 1412600000],
    ["Italy", 60000000],
    ["Narnia", 256]
];
// to access those elements:
console.log(arr[2][1]);
// in this ex we are accessing to Narnia's population
