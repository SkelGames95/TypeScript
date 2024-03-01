var countries = [
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
var mapId = countries.map(function (el) {
    return el.id * 2;
});
console.log(mapId);
// filter:
var filterid = countries.filter(function (el) {
    return el.id > 2;
});
console.log(filterid);
// foreach:
countries.forEach(function (el) {
    console.log("The code for ".concat(el.name, " is ").concat(el.code));
});
// find:
var findId = countries.find(function (el) {
    return el.id == 2;
});
console.log(findId);
