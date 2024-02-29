// Assertion:

// Library code

function someLibraryFunction(): any {
    return "a string";
}

// Our code

const valueFromLibrary = someLibraryFunction() as string;

const stringLength = valueFromLibrary.length;

console.log(stringLength);


// Alias:

type Street = string;

const street:Street = "Long Avenue";

console.log(street);
