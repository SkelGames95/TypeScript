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

// from here we can also create other instances of the Class