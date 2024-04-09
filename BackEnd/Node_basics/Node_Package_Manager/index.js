// Random Name Generator

// var generateName = require("sillyname");
import generateName from "sillyname";
var sillyname = generateName();
console.log(sillyname);


// SuperHeros Name Generator

import superheroes from "superheroes";

const allSuperHeros = superheroes.all;

var superheroName = superheroes.random();

console.log(`SuperHero ${superheroName} saved ${sillyname}`);
