// Types:
// Strings:
var city = "New York";
// Numbers:
var height = 1.82;
// Boolean:
var itRains = true;
console.log(city, height, itRains);
console.log("----------------------------------------------------------");
// Other Types: any types
// null:
var currencies = null; //they can be also set up as types
// undefined:
var languages = undefined; //they can be also set up as types
// any:
var object = {};
console.log(currencies, languages, object);
console.log("----------------------------------------------------------");
// First application of types:
function formatMessage(countryName, population) {
    if (population === void 0) { population = 0; }
    return "The population of ".concat(countryName, " is ").concat(population);
}
var country = "Thailand";
var population = 69950850;
var message = formatMessage(country, population);
//                     ^?
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
console.log("----------------------------------------------------------");
// Adding an array:
var poker = ["10F", "10H", "10S", "10D"];
console.log(poker);
console.log("----------------------------------------------------------");
// Adding a function with optional parameter:
var salary = function (person2, sum, currency) {
    var sentence = "".concat(person2.getFullName(), " salary is ").concat(sum);
    if (typeof currency === "string") {
        sentence += " ".concat(currency);
    }
    return sentence;
};
var person2 = new Person('Jake', 'Negan');
var description1 = salary(person2, 1335, "€");
var description2 = salary(person2, 1335);
console.log(description1);
console.log("-------------");
console.log(description2);
console.log("----------------------------------------------------------");
