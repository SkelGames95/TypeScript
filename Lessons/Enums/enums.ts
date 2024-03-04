enum Continents {
    Asia,
    Africa,
    NorthAmerica,
    SouthAmerica,
    Antarctica,
    Europe,
    Oceania,
}

interface Country {
    name:string;
    continent:Continents;
}

const countries:Country[] = [
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
]

console.log(countries)


// string enums:

enum VideogameGenre {
    FPS = "FPS",
    TPS = "TPS",
    ActionAdventure = "ActionAdventure",
    SoulsLike = "SoulsLike",
}

interface Videogame {
    title:string;
    genre:VideogameGenre;
}

const videogames:Videogame[] = [
    {
        title: "Call of Duty: Black Ops",
        genre: VideogameGenre.FPS
    },
    {
        title: "Bloodborne",
        genre: VideogameGenre.SoulsLike
    },
    {
        title: "GTA",
        genre: VideogameGenre.ActionAdventure
    },
    {
        title: "Fortnite",
        genre: VideogameGenre.TPS
    },
]