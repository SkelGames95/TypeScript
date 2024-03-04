// normal type mapping:

type CountryData = {
    languages:string[];
    population:number;
};

type Available<Type> = {        // <Type> works as a parameter in this case. We are passing properties that will become boolean
    [Property in keyof Type]:boolean;
};

const availableCountryData: Available<CountryData> = {      // substituting Type with the type of interest
    languages: true,
    population: false,
};

console.log("---------------------------------------------------------------------");


// examples of type mapping with properties, where properties are inherited:

type CountryData2 = {
    languages:string[];
    population:number;
};

type Available2<Type> = {
    +readonly [Property in keyof Type]:boolean;     // adding readonly property: all properties will be readonly
};

// ----------------------------------------------------------------------------

type CountryData3 = {
    readonly languages:string[];
    readonly population:number;
};

type Available3<Type> = {
    -readonly [Property in keyof Type]:boolean;     // removing readonly property: all properties can be modified
};

const availableCountryDataEx: Available3<CountryData3> = {      // taking CountryData3 and passing through Available3(- readonly)
    languages: true,
    population: false,
};

availableCountryDataEx.population = true    // changing population cause it's not readonly anymore

// ----------------------------------------------------------------------------

type Available4<Type> = {
    [Property in keyof Type]+?:boolean;     // marking all properties as optional, so they will be boolean or undefined
};

const availableCountryDataEx1: Available4<CountryData2> = {      // taking CountryData2 and passing through Available4(optional properties)
    languages: true,
    //population: false,   removing property because optional
};

availableCountryDataEx1.population = true    // changing population property cause as optional I can call it

// ----------------------------------------------------------------------------

type CountryData5 = {
    languages:string[];
    population?:number;
};

type Available5<Type> = {
    [Property in keyof Type]-?:boolean;     // having the initial property "population" as optional we can define it as requested removing the optional mark
};

const availableCountryDataEx2: Available5<CountryData5> = {      // taking CountryData5 and passing through Available5( to remove optional properties setting)
    languages: true,
    population: false,   // population is requested because anymore optional
};
