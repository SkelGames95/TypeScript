// Types:

// Strings:

let city:string = "New York";

// Numbers:

let height:number = 1.82;

// Boolean:

let itRains:boolean = true;

console.log(city, height, itRains);

console.log("----------------------------------------------------------")

// Other Types: any types

// null:

let currencies = null;    //they can be also set up as types

// undefined:

let languages = undefined;    //they can be also set up as types

// any:

let object:any = {};

console.log(currencies, languages, object);

console.log("----------------------------------------------------------")


// First application of types:

function formatMessage(countryName:string, population:number = 0):string {
    return `The population of ${countryName} is ${population}`;
}

let country:string = "Thailand";

let population:number = 69_950_850;

const message:string = formatMessage(country, population);
//                     ^?

console.log(message);

console.log("----------------------------------------------------------")

// Going deeper in the builtins:

// Define an interface for a Person
interface IPerson {
  firstName:string;
  lastName:string;
  getFullName():string;
}

// Define a class representing a Person implementing the IPerson interface
class Person implements IPerson {
  // Properties
  firstName:string;
  lastName:string;
  
  // Constructor
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  // Method to get the full name
  getFullName():string {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create an instance of Person
const person1:IPerson = new Person('John', 'Doe');

// Print out the full name
console.log(person1.getFullName()); // Output: John Doe

// Define a dictionary of additional properties for a person
interface IPersonDetails {
  age:number;
  email:string;
}

// Create a new object to hold additional details for person1
const personDetails:IPersonDetails = {
  age: 30,
  email: 'john.doe@example.com'
};

// Print out additional details
console.log(`Age: ${personDetails.age}`);
console.log(`Email: ${personDetails.email}`);

console.log("----------------------------------------------------------")


// Adding an array:

let poker:string[] = ["10F", "10H", "10S", "10D"]

console.log(poker)

console.log("----------------------------------------------------------")


// Adding a function with optional parameter:

const salary = (person2:Person, sum:number, currency?:string): void => {
  let sentence = `${person2.getFullName()} salary is ${sum}`

  if (typeof currency === "string"){
    sentence += ` ${currency}`;
  }

  return sentence;
}

const person2:IPerson = new Person('Jake', 'Negan');

let description1 = salary(person2, 1335, "€");
let description2 = salary(person2, 1335);

console.log(description1);
console.log("-------------")
console.log(description2);
console.log("----------------------------------------------------------")