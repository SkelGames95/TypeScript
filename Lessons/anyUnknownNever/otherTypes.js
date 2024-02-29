// ANY powerful application:
var region = { name: "Marches" }; // without referring to the object as any type it will be a defined object type that can't take anything in
// region.province1 = "Ancona";
// console.log(region);
console.log("-----------");
var country = { name: "Italy" }; // using the any type it will be able to take any other properties
country.population = 60000000;
country.president = "Mattarella";
country.code = "IT";
console.log(country);
// UNKNOWN powerful application:
function output(value) {
    if (typeof value === "number") {
        console.log("It's a number: ".concat(value));
    }
    else if (typeof value === "string") {
        console.log(value.length);
    }
    else if (typeof value === "boolean") {
        console.log("This value is: ".concat(value));
    }
    else {
        console.log("unknown type value");
    }
}
// We can't do anything with a value of unknown type, so we can use it making a type check
var power = "Empty";
output(power);
output(13);
output(false);
output();
// never type (?)
function throwFormattedError(message) {
    throw new Error("Something went wrong: ".concat(message));
}
// setting it as never type because we know it will never be thrown
