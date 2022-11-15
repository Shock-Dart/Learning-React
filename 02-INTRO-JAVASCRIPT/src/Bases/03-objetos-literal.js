//Literales

const persona = {
  nombre : 'Tony',
  apellido : 'Stark',
  edad : 45,
  direccion : {
    ciudad : 'New York',
    zip : 55897685,
    latitud : 85.8798,
    longitud : 89.5846
  }
};

//console.table(persona)
console.log(persona)

const persona2 = persona

persona2.nombre = 'Peter'

console.log(persona2)

console.log(persona)

const persona3 = {...persona}

persona3.nombre = 'Ali'

console.log(persona3)

console.log(persona)
