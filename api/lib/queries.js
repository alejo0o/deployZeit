"use strict";
const fetchData = require("./callapi");
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
      throw new Error("Fallo en la operacion del servidor");
    }
    return peliculas;
  },
  getPelicula: async (root, { id }) => {
    let pelicula;
    try {
      pelicula = await fetchData.peliculas.read(id);
    } catch (error) {
      throw new Error("Fallo en la operacion del servidor");
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
      throw new Error("Fallo en la operacion del servidor");
    }
    return persona;
  },
  getPersona: async (root, { id }) => {
    let persona;
    try {
      persona = await fetchData.personas.read(id);
    } catch (error) {
      throw new Error("Fallo en la operacion del servidor");
    }
    return persona;
  },
  //Noticias
  getNoticias: async () => {
    let noticias;
    try {
      noticias = await fetchData.noticias.list();
    } catch {
      throw new Error("Fallo en la operacion del servidor");
    }
    return noticias;
  },
  getNoticia: async (root, { id }) => {
    let noticia;
    try {
      noticia = await fetchData.noticias.read(id);
    } catch (error) {
      throw new Error("Fallo en la operacion del servidor");
    }
    return noticia;
  },

  //Criticas
  getCriticas: async () => {
    let criticas;
    try {
      criticas = await fetchData.criticas.list();
    } catch {
      throw new Error("Fallo en la operacion del servidor");
    }
    return criticas;
  },
  getCritica: async (root, { id }) => {
    let critica;
    try {
      critica = await fetchData.criticas.read(id);
    } catch (error) {
      throw new Error("Fallo en la operacion del servidor");
    }
    return critica;
  },
  ////////RECURSOS PERSONALIZADOS
  getPeliculasporEstreno: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getEstrenos(page);
      recursos = recursos.results;
      console.log(recursos);
    } catch {
      throw new Error("Fallo en la operacion del servidor");
    }
    return recursos;
  },
  getCriticasValor: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getPromedioCriticas(page);
      recursos = recursos.results;
    } catch {
      throw new Error("Fallo en la operacion del servidor");
    }
    return recursos;
  },
  getNoticiasFecha: async (root, { page }) => {
    let recursos;
    try {
      recursos = await fetchData.customRequests.getNoticiasFecha(page);
      recursos = recursos.results;
      console.log(recursos);
    } catch {
      throw new Error("Fallo en la operacion del servidor");
    }
    return recursos;
  },
};

module.exports = queries;
