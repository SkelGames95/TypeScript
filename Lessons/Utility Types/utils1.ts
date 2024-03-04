// some shortcuts to use special types faster: PARTIAL, REQUIRED, READONLY

// PARTIAL TYPE

interface Country {
    name:string;
    code:string;
    currency:string;
    population:number;
}

const countryA:Country = {
    name: "Spain",
    code: "Es",
    currency: "Euro",
    population: 47_450_795,
};

const countryB:Partial<Country> = {     // adding Partial and putting the type between <> make all properties optional
    name: "Nigeria",
    population: 211_400_708,
};


// REQUIRED TYPE

interface Country1 {
    name:string;
    code:string;
    currency?:string;
    population?:number;
}

const countryC:Required<Country1> = {       // Required is the opposite  of Partial
    name: "Spain",
    code: "Es",
    currency: "Euro",
    population: 47_450_795,
};

const countryD:Country1 = {     // being optional currency doesn't need to be shown
    name: "Nigeria",
    code: "NG",
    population: 211_400_708,
};


// READONLY, the simplest:

const countryE:Readonly<Country1> = {       // All the properties are now unchangeable
    name: "Spain",
    code: "Es",
    currency: "Euro",
    population: 47_450_795,
};

// countryE.name = "Narnia"      error!!