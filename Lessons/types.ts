function formatMessage(countryName:string, population:number = 0) {
    return `The population of ${countryName} is ${population}`;
}

let country:string = "Thailand";

let population:number = 69_950_850;

const message:string = formatMessage(country, population);

console.log(message);


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