//Imports y Exports Multiples

import heroes, {owners} from "../Data/heroes"

export const getHeroeById = (llave) => {
  return heroes.find(heroe => heroe.id === llave)
}

export const getHeroeByOwner = (dueno) => heroes.filter(heroe => heroe.owner === dueno)
