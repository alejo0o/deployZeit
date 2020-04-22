'use strict';
const fetchData = require('./callapi');
const queries = {
  //Peliculas
  getPeliculas: async () => {
    let peliculas;
    try {
      peliculas = await fetchData.peliculas.list();
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return peliculas;
  },
  getPelicula: async (root, { id }) => {
    let pelicula;
    try {
      pelicula = await fetchData.peliculas.read(id);
    } catch (error) {
      throw new Error('Fallo en la operacion del servidor');
    }
    return pelicula;
  },
    //Personas
    getPersonas: async () => {
      let personas;
      try {
        personas = await fetchData.personas.list();
      } catch {
        throw new Error('Fallo en la operacion del servidor');
      }
      return personas;
    },
    getPersona: async (root, { id }) => {
      let persona;
      try {
        persona = await fetchData.personas.read(id);
      } catch (error) {
        throw new Error('Fallo en la operacion del servidor');
      }
      return persona;
    },
  }
module.exports = queries;
