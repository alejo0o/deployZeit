'use strict';
const fetchData = require('./callapi');
const mutations = {
  //Peliculas
  createPelicula: async (root, { input }) => {
    let pelicula;
    try {
      pelicula = await fetchData.peliculas.create(input);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }

    return pelicula;
  },
  editPelicula: async (root, { id, input }) => {
    let pelicula;
    const defaults = await fetchData.peliculas.read(id); //obtengo los datos default de la base
    const newMovie = Object.assign(defaults, input); //esto evita que tome el resto de argumentos
    //como nulos y se caiga el edit
    try {
      pelicula = await fetchData.peliculas.update(id, newMovie);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return pelicula;
  },
  deletePelicula: async (root, { id }) => {
    try {
      await fetchData.peliculas.remove(id);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return `200: Eliminado exitoso de registro con id ${id}`;
  },
  //Personas
  createPersona: async (root, { input }) => {
    let persona;
    try {
      persona = await fetchData.personas.create(input);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }

    return persona;
  },
  editPersona: async (root, { id, input }) => {
    let persona;
    const defaults = await fetchData.personas.read(id); 
    const newPersona = Object.assign(defaults, input); 
    try {
      persona = await fetchData.personas.update(id, newPersona);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return persona;
  },
  deletePersona: async (root, { id }) => {
    try {
      await fetchData.personas.remove(id);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return `200: Eliminado exitoso de registro con id ${id}`;
  },  
};

module.exports = mutations;
