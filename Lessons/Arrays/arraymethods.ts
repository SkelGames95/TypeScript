interface Countries {
    id:number;
    name:string;
    code:string
}

const countries: Array<Countries> = [
    {
        id: 1,
        name: "Italy",
        code: "IT"
    },  
    {
        id: 2,
        name: "Belgium",
        code: "BG"
    },
    {
        id: 3,
        name: "United Kingdom",
        code: "UK"
    },  
    {
        id: 4,
        name: "United States of America",
        code: "US"
    }
];


// map:
const mapId = countries.map((el) => {
    return el.id*2;
})

console.log(mapId);


// filter:
const filterid = countries.filter((el) => {
    return el.id > 2;
})

console.log(filterid);


// foreach:
countries.forEach((el) => {
    console.log(`The code for ${el.name} is ${el.code}`)
})

// find:
const findId = countries.find((el) => {
    return el.id == 2;
})

console.log(findId);

