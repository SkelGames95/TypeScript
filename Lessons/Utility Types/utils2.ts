// some shortcuts to use properties faster: PICK & OMIT
interface Country {
    name:string;
    code:string;
    currency:string;
    population:number;
}

type CountryPreview = Pick<Country, "name" | "code">;   // Picking properties we want from an interface to another type alias

const countryA:Country = {
    name: "Spain",
    code: "Es",
    currency: "Euro",
    population: 47_450_795,
};

const countryB:CountryPreview = {     // Using picked properties
    name: "Nigeria",
    code: "NG"
};


type CountryPreviewOmitting = Omit<Country, "currency" | "population">;   // Omitting properties from an interface to another type alias

const countryC:CountryPreviewOmitting = {     // Using picked properties omitting the others
    name: "Nigeria",
    code: "NG"
};