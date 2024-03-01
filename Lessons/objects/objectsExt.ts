// Extending Interface:

interface Country {
    readonly name:string;       // this is a readonly property. It can't be modified after 
    code:string;
    population?:number;         // this is an optional property
}

const country:Country = {
    name: "Italy",
    code: "IT",
    population: 60_000_000
}

interface CountryWtCurrency extends Country {      
// this interface extends the previous one but it's not something we are forced to use
    currency: {
        name: string;
        symbol: string;
    }
}

const secondCountry:CountryWtCurrency = {
    name: "Canada",
    code: "CA",
    population: 38_250_000,
    currency: {
        name: "Canadian Dollar",
        symbol: "(C$)"
    }
}

interface CountryLanguages extends Country, CountryWtCurrency {
    languages:string
}
// an interface can also extends 2 other interfaces