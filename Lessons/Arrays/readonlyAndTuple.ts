// Readonly in arrays:

const thisArray: ReadonlyArray<string> = ["this", "is", "readonly"];
// they are the same
const thusArray:readonly string[] = ["this", "is", "readonly"];

// to define a Tuple type:

type Tuple = readonly [string, number];
// this way we defined the exact number of elements inside the array and their types, making the array readonly
// we can also use this tuple as a sub-type, making all the contained elements tuples:

const arr:Array<Tuple> = [
    ["China", 1_412_600_000],
    ["Italy", 60_000_000],
    ["Narnia", 256]
];

// to access those elements:
console.log(arr[2][1]);
// in this ex we are accessing to Narnia's population