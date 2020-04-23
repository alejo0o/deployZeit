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
      noticia = await fetchData.noticia.read(id);
    } catch (error) {
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
  },
};

module.exports = queries;
