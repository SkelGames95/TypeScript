// ANY powerful application:

let region = { name: "Marches"};        // without referring to the object as any type it will be a defined object type that can't take anything in

// region.province1 = "Ancona";

// console.log(region);

console.log("-----------");


let country: any = { name: "Italy"};    // using the any type it will be able to take any other properties

country.population = 60_000_000;
country.president = "Mattarella";
country.code = "IT";

console.log(country);


// UNKNOWN powerful application:

function output(value: unknown) {
    if (typeof value === "number"){
        console.log(`It's a number: ${value}`);
    } else if (typeof value === "string"){
        console.log(value.length);
    } else if (typeof value === "boolean"){
        console.log(`This value is: ${value}`);
    } else {
        console.log("unknown type value")
    }
}
// We can't do anything with a value of unknown type, so we can use it making a type check

let power:string = "Empty";

output(power);
output(13);
output(false);
output();


// never type (?)

function throwFormattedError(message:string): never {
    throw new Error(`Something went wrong: ${message}`);
}

// setting it as never type because we know it will never be thrown