const array1: string[] = ["Hi", "Hello", "Goodmorning"];
// these two are equal
const array2: Array<string> = ["Hi", "Hello", "Goodmorning"];


// array with multiple types
const arr1: (string | boolean)[] = ["Array", "With", "Multiple", "Types", true];
// these two are equal
const arr2: Array<string | boolean> = ["Array", "With", "Multiple", "Types", true];


// array of objects
const countries: { id:number; name:string; code:string }[] = [
// the same as:
// const countries: Array<{ id:number; name:string; code:string }> = [
    {
        id: 1,
        name: "Italy",
        code: "IT",
    },  
    {
        id: 2,
        name: "Belgium",
        code: "BG",
    },  
    {
        id: 3,
        name: "United Kingdom",
        code: "UK",
    },  
    {
        id: 4,
        name: "United States of America",
        code: "US",
    },  
];

// another one equal with Interface:

interface Countries {
    id:number;
    name:string;
    code:string
}

const countriesArray: Array<Countries> = [
    {
        id: 1,
        name: "Italy",
        code: "IT",
    },  
    {
        id: 2,
        name: "Belgium",
        code: "BG",
    }, 
];