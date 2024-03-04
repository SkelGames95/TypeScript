var Continents;
(function (Continents) {
    Continents[Continents["Asia"] = 0] = "Asia";
    Continents[Continents["Africa"] = 1] = "Africa";
    Continents[Continents["NorthAmerica"] = 2] = "NorthAmerica";
    Continents[Continents["SouthAmerica"] = 3] = "SouthAmerica";
    Continents[Continents["Antarctica"] = 4] = "Antarctica";
    Continents[Continents["Europe"] = 5] = "Europe";
    Continents[Continents["Oceania"] = 6] = "Oceania";
})(Continents || (Continents = {}));
var countries = [
    {
        name: "Spain",
        continent: Continents.Europe
    },
    {
        name: "Italy",
        continent: Continents.Europe
    },
    {
        name: "Egypt",
        continent: Continents.Africa
    },
    {
        name: "Australia",
        continent: Continents.Oceania
    },
    {
        name: "Japan",
        continent: Continents.Asia
    },
];
console.log(countries);
