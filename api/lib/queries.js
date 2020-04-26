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
  //Noticias
  getNoticias: async () => {
    let noticias;
    try {
      noticias = await fetchData.noticias.list();
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticias;
  },
  getNoticia: async (root, { id }) => {
    let noticia;
    try {
      noticia = await fetchData.noticias.read(id);
    } catch (error) {
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
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
  //Criticas
  getCriticas: async () => {
    let criticas;
    try {
      criticas = await fetchData.criticas.list();
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return criticas;
  },
  getCritica: async (root, { id }) => {
    let critica;
    try {
      critica = await fetchData.criticas.read(id);
    } catch (error) {
      throw new Error('Fallo en la operacion del servidor');
    }
    return critica;
  },
};

module.exports = queries;
