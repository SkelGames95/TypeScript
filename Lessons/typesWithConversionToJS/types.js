function formatMessage(countryName, population) {
    if (population === void 0) { population = 0; }
    return "The population of ".concat(countryName, " is ").concat(population);
}

var country = "Thailand";
var population = 69950850;
var message = formatMessage(country, population);

console.log(message);

console.log("----------------------------------------------------------");

// Define a class representing a Person implementing the IPerson interface
var Person = /** @class */ (function () {
    // Constructor
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method to get the full name
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());

// Create an instance of Person
var person1 = new Person('John', 'Doe');

// Print out the full name
console.log(person1.getFullName()); // Output: John Doe

// Create a new object to hold additional details for person1
var personDetails = {
    age: 30,
    email: 'john.doe@example.com'
};

// Print out additional details
console.log("Age: ".concat(personDetails.age));
console.log("Email: ".concat(personDetails.email));
