'use strict';
const fetchData = require('./callapi');
const queries = {
  //Peliculas
  getPeliculas: async (root, { page }) => {
    let peliculas;
    try {
      !page
        ? (peliculas = await fetchData.peliculas.list())
        : (peliculas = await fetchData.peliculas.listPage(page));
      peliculas = peliculas.results;
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
  getPersonas: async (root, { page }) => {
    let personas;
    try {
      !page
        ? (personas = await fetchData.personas.list())
        : (personas = await fetchData.personas.listPage(page));
      personas = personas.results;
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
  //Noticias
  getNoticias: async (root, { page }) => {
    let noticias;
    try {
      !page
        ? (noticias = await fetchData.noticias.list())
        : (noticias = await fetchData.noticias.listPage(page));
      noticias = noticias.results;
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

  //Criticas
  getCriticas: async (root, { page }) => {
    let criticas;
    try {
      !page
        ? (criticas = await fetchData.criticas.list())
        : (criticas = await fetchData.criticas.listPage(page));
      criticas = criticas.results;
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
  ////////RECURSOS PERSONALIZADOS
  getPeliculasporEstreno: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getEstrenos(page);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getCriticasValor: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getPromedioCriticas(page);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getNoticiasFecha: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getNoticiasFecha(page);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getAnimesporEstreno: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getAnimesEstreno(page);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getCriticasporPelicula: async (root, { page, id }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getCriticasporPelicula(
        page,
        id
      );
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getCriticasPromedioPelicula: async (root, { page, id }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getCriticasPromedioPelicula(
        page,
        id
      );
      recursos = Object.values(recursos.results);
      recursos = recursos[0];
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
  getCriticasUsuarioPelicula: async (root, { page, idMovie, idUser }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getCriticasUsuarioPelicula(
        page,
        idMovie,
        idUser
      );
      recursos = Object.values(recursos.results);
      recursos = recursos[0];
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return recursos;
  },
};

module.exports = queries;
