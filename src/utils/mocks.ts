export const character = {
  properties: {
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    created: "2025-01-11T02:17:30.700Z",
    edited: "2025-01-11T02:17:30.700Z",
    name: "Luke Skywalker",
    homeworld: "https://swapi.tech/api/planets/1",
    url: "https://swapi.tech/api/people/1",
  },
  description: "A person within the Star Wars universe",
  _id: "5f63a36eee9fd7000499be42",
  uid: "1",
  __v: 0,
};

export const planet = {
  properties: {
    diameter: "10465",
    rotation_period: "23",
    orbital_period: "304",
    gravity: "1 standard",
    population: "200000",
    climate: "arid",
    terrain: "desert",
    surface_water: "1",
    created: "2025-01-11T02:17:30.703Z",
    edited: "2025-01-11T02:17:30.703Z",
    name: "Tatooine",
    url: "https://www.swapi.tech/api/planets/1",
  },
  description: "A planet.",
  _id: "5f7254c11b7dfa00041c6fae",
  uid: "1",
  __v: 0,
};

export const characterList = [
  {
    uid: "1",
    name: "Luke Skywalker",
    url: "https://swapi.tech/api/people/1",
  },
  {
    uid: "2",
    name: "Darth Vader",
    url: "https://swapi.tech/api/people/4",
  },
];

export const films = {
  result: [
    {
      _id: 1,
      properties: {
        url: "1",
        title: "The Empire Strikes Back",
        opening_crawl: "Opening crawl for Film 1",
      },
    },
    {
      _id: 2,
      properties: {
        url: "2",
        title: "A New Hope",
        opening_crawl: "Opening crawl for Film 2",
      },
    },
  ],
};

export const planetList = [
  {
    uid: "1",
    name: "Tatooine",
    url: "https://www.swapi.tech/api/planets/1",
  },
  {
    uid: "2",
    name: "Alderaan",
    url: "https://www.swapi.tech/api/planets/2",
  },
];
