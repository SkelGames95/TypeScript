var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log("-----------------------------------------------------");
// from here we can also create other instances of the Class or extend the class created:
var CountryWithCurrency = /** @class */ (function (_super) {
    __extends(CountryWithCurrency, _super);
    function CountryWithCurrency(name, code, currency) {
        var _this = _super.call(this, name, code) || this; // super call the parameters from the initial class
        _this.currency = currency;
        return _this;
    }
    return CountryWithCurrency;
}(Country));
var columbiaCurrency = {
    name: "Columbian Peso",
    code: "COP",
    symbol: "$"
};
var columbia = new CountryWithCurrency("Columbia", "CO", columbiaCurrency);
columbia.addLanguage("Spanish");
columbia.addLanguage("English");
console.log(columbia);
var columbiaLanguages = columbia.describeLanguages();
console.log(columbiaLanguages);
