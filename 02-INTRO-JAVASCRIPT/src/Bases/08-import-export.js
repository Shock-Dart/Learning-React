//Imports y Exports

import { heroes } from "./Data/heroes"

//import { heroes } from './Data/heroes';

const getHeroeById = (llave) => {
  return heroes.find(heroe => heroe.id === llave)
}

const getHeroeByOwner = (dueno) => heroes.filter(heroe => heroe.owner === dueno)

console.log(getHeroeById(1))
console.log(getHeroeByOwner('DC'))