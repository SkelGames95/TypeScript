var Country = /** @class */ (function () {
    // obviously we can also use readonly properties here
    // Contructor:
    function Country(name, code) {
        // Fields:
        this.name = "";
        this.code = "";
        this.languages = [];
        this.name = name; // "this" keyword refers to the fields of the class
        this.code = code;
    }
    // Methods:
    Country.prototype.addLanguage = function (language) {
        this.languages.push(language);
    }; // it takes a parameter and doesn't return anything. It can be used to add elements to the instance of the class
    Country.prototype.describeLanguages = function () {
        return "The languages spoken in ".concat(this.name, " include: ").concat(this.languages.join(", "));
    }; // it doesn't take parameters but it reurns a string with instance of class data entering the array with join
    return Country;
}());
var nigeria = new Country("Nigeria", "NG"); // nigeria is a new instance of the country class
// nigeria.name = "Narnia";     // fields can be changed like this
// calling Class Method to add languages:
nigeria.addLanguage("Hausa");
nigeria.addLanguage("Igbo");
nigeria.addLanguage("Yoruba");
nigeria.addLanguage("English");
var description = nigeria.describeLanguages();
console.log(nigeria);
console.log(description);
