// some shortcuts to use properties faster: RECORD


const country: Record<string, string> = {  // we are saying that every property has to be a string and every value has too
    name: "Spain",
    code: "Es",
    currency: "Euro",
    //population: 47_450_795,
};

const countryB: Record<string, string | number> = {  // here we are transforming the value into a union type to add numbers
    name: "Spain",
    code: "Es",
    currency: "Euro",
    population: 47_450_795,
};

// -----------------------------------------------------------

// another example for Record on objects of objects:

interface Country {
    id:number;
    name:string;
    code:string;
}

//const countries: Record<string, {}> = {
const countries: Record<string, Country> = {
    italy: {
        id: 1,
        name: "Italy",
        code: "IT",
    },  
    belgium: {
        id: 2,
        name: "Belgium",
        code: "BG",
    },  
    unitedKingdom: {
        id: 3,
        name: "United Kingdom",
        code: "UK",
    },  
    unitedStates: {
        id: 4,
        name: "United States of America",
        code: "US",
    },  
};


type Countries = Record<"italy" | "belgium" | "unitedKingdom" | "unitedStates", Country>;

const countries1: Countries = {
    italy: {
        id: 1,
        name: "Italy",
        code: "IT",
    },  
    belgium: {
        id: 2,
        name: "Belgium",
        code: "BG",
    },  
    unitedKingdom: {
        id: 3,
        name: "United Kingdom",
        code: "UK",
    },  
    unitedStates: {
        id: 4,
        name: "United States of America",
        code: "US",
    },  
};

// 3 ways to write the same thing one more specific than the others