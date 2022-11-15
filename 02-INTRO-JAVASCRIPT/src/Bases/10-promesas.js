//Promesas

import {getHeroeById, getHeroeByOwner } from "./Bases/09-imp-exp-mul"

const promesa = new Promise ( (resolve, reject) => {
  setTimeout( () => {
    const heroe = getHeroeById(1);
    const heroes = getHeroeByOwner('DC');

    console.log(heroe, heroes)
    resolve(heroe)
  }, 2000)
});

promesa.then((heroe) => {
  console.log(`Encontramos al heroe ${heroe.name}`)
  console.log(heroe, 'A')  
})

const getHeroeByIdAsync = (id) => {
  return new Promise ( ( resolve, reject ) => {
    setTimeout (() => {
      const p1 = getHeroeById(id);

      if (p1) {
        resolve(p1);
      } else {
        reject('No se encontro el heroe');
      }
    })
  })
}

getHeroeByIdAsync(2)
//.then((heroe) => {
//  console.log(heroe)
//})
.then(console.log)
.catch(err => console.log(err));