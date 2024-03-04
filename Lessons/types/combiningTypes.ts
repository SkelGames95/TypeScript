// union type (often handled with type checking)

function outputValue( value: number | string | boolean ){
    console.log(`This value is: ${value}`);
}

outputValue(213634);
outputValue("a string");
outputValue(false);


// intersection types for interfaces: two object types combined 

interface Country {
    name:string;
}

interface Climate {
    desert:boolean;
}

// we can also intersect both types with the following type alias and passing the new alias as type for the parameter:
// type CountryWithClimate = Country & Climate;

// then:
// function describe(val: CountryWithClimate) {

function describe(val: Country & Climate) {
// the passed value must be an object that contains both parameters
    console.log(`Country name is ${val.name}`);
    console.log(`Country has a desert climate: ${val.desert}`);
}

describe({ name: "Nigeria", desert: true});
describe({ name: "Italy", desert: false});