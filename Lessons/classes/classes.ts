class Country {
    // Fields:
    name = "";
    code:string = "";

    languages:string[] = [];
    // obviously we can also use readonly properties here

    // Contructor:
    constructor( name:string, code:string ) {     // we can't assign a type to the constructor because it has a personalized type and doesn't return anything
        this.name = name;       // "this" keyword refers to the fields of the class
        this.code = code;
    }

    // Methods:
    addLanguage(language:string) {
        this.languages.push(language);
    }   // it takes a parameter and doesn't return anything. It can be used to add elements to the instance of the class
    describeLanguages():string {
        return `The languages spoken in ${this.name} include: ${this.languages.join(", ")}`;
    }   // it doesn't take parameters but it reurns a string with instance of class data entering the array with join
}

const nigeria = new Country("Nigeria", "NG");      // nigeria is a new instance of the country class

// nigeria.name = "Narnia";     // fields can be changed like this


// calling Class Method to add languages:

nigeria.addLanguage("Hausa");
nigeria.addLanguage("Igbo");
nigeria.addLanguage("Yoruba");
nigeria.addLanguage("English");

const description = nigeria.describeLanguages();

console.log(nigeria);

console.log(description);

console.log("-----------------------------------------------------")

// from here we can also create other instances of the Class or extend the class created:

class CountryWithCurrency extends Country {

    currency:Currency;

    constructor(name:string, code:string, currency:Currency) {
        super(name, code);      // super call the parameters from the parent class
        this.currency = currency;
    }
}


interface Currency {
    name:string;
    code:string;
    symbol:string;
}

const columbiaCurrency:Currency = {
    name: "Columbian Peso",
    code: "COP",
    symbol: "$"
};

const columbia = new CountryWithCurrency("Columbia", "CO", columbiaCurrency);


columbia.addLanguage("Spanish");
columbia.addLanguage("English");

console.log(columbia);

const columbiaLanguages = columbia.describeLanguages();
console.log(columbiaLanguages);