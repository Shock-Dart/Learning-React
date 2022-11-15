//Desestructuracion
//Asigancion desestructurante

const persona = {
  nombre: 'Tony',
  edad : 45,
  clave : 'IronMan'
}

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

const { nombre:nombre2, edad } = persona

console.log(nombre2)
console.log(edad)

const retornaPersona = ( {clave, nombre, edad, rango = 'Captitan'} ) => {

  //console.log(nombre, edad, rango)

  return {
    nombreClave : clave,
    anios: edad,
    latlng : {
      lat: 12.9875,
      lng: 89.2587,
    }
  }
}

const avenger = retornaPersona (persona)

const {nombreClave, anios, latlng:{lat, lng}} = avenger

console.log(nombreClave,anios, lat, lng)
