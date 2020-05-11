'use strict';
const fetch = require('node-fetch');

require('dotenv').config();
//const BASE_URL = process.env.API_ENDPOINT || 'http://127.0.0.1:8000/api';

const BASE_URL =
  process.env.API_ENDPOINT || 'https://proyectocinegithub.herokuapp.com/api';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  peliculas: {
    list() {
      //throw new Error('Not found');
      return callApi('/peliculas');
    },
    listPage(pageNumber) {
      return callApi(`/peliculas?page=${pageNumber}`);
    },
    create(pelicula) {
      //throw new Error('500: Server Error');
      return callApi(`/peliculas`, {
        method: 'POST',
        body: JSON.stringify(pelicula),
      });
    },
    read(peliculaId) {
      return callApi(`/peliculas/${peliculaId}`);
    },
    update(peliculaId, updates) {
      return callApi(`/peliculas/${peliculaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(peliculaId) {
      return callApi(`/peliculas/${peliculaId}`, {
        method: 'DELETE',
      });
    },
  },
  personas: {
    list() {
      return callApi('/personas');
    },
    listPage(pageNumber) {
      return callApi(`/personas?page=${pageNumber}`);
    },
    create(persona) {
      return callApi(`/personas`, {
        method: 'POST',
        body: JSON.stringify(persona),
      });
    },
    read(personaId) {
      return callApi(`/personas/${personaId}`);
    },

    update(personaId, updates) {
      return callApi(`/personas/${personaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(personaId) {
      return callApi(`/personas/${personaId}`, {
        method: 'DELETE',
      });
    },
  },
  noticias: {
    list() {
      return callApi('/noticias');
    },
    listPage(pageNumber) {
      return callApi(`/noticias?page=${pageNumber}`);
    },
    create(noticia) {
      return callApi(`/noticias`, {
        method: 'POST',
        body: JSON.stringify(noticia),
      });
    },
    read(noticiaId) {
      return callApi(`/noticias/${noticiaId}`);
    },
    update(noticiaId, updates) {
      return callApi(`/noticias/${noticiaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(noticiaId) {
      return callApi(`/noticias/${noticiaId}`, {
        method: 'DELETE',
      });
    },
  },
  criticas: {
    list() {
      return callApi('/criticas');
    },
    listPage(pageNumber) {
      return callApi(`/criticas?page=${pageNumber}`);
    },
    create(critica) {
      return callApi(`/criticas`, {
        method: 'POST',
        body: JSON.stringify(critica),
      });
    },
    read(criticaId) {
      return callApi(`/criticas/${criticaId}`);
    },
    update(criticaId, updates) {
      return callApi(`/criticas/${criticaId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(criticaId) {
      return callApi(`/criticas/${criticaId}`, {
        method: 'DELETE',
      });
    },
  },
  usuarios: {
    create(usuario) {
      return callApi(`/users2`, {
        method: 'POST',
        body: JSON.stringify(usuario),
      });
    },
    read(usuarioId) {
      return callApi(`/users2/${usuarioId}`);
    },
    update(usuarioId, updates) {
      return callApi(`/users2/${usuarioId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    remove(usuarioId) {
      return callApi(`/users2/${usuarioId}`, {
        method: 'DELETE',
      });
    },
  },
  customRequests: {
    getPromedioCriticas(pageNumber) {
      return callApi(`/customResource/criticas?page=${pageNumber}`);
    },
    getEstrenos(pageNumber) {
      return callApi(`/customResource/estrenos?page=${pageNumber}`);
    },
    getAnimesEstreno(pageNumber) {
      return callApi(`/customResource/animes?page=${pageNumber}`);
    },
    getCriticasporPelicula(pageNumber, id) {
      return callApi(`/customResource/${id}/usuarios?page=${pageNumber}`);
    },
    getNoticiasFecha(pageNumber) {
      return callApi(`/customResource/noticias?page=${pageNumber}`);
    },
    getCriticasPromedioPelicula(pageNumber, id) {
      return callApi(
        `/customResource/${id}/criticaPelicula?page=${pageNumber}`
      );
    },
    getCriticasUsuarioPelicula(pageNumber, idMovie, idUser) {
      return callApi(
        `/customResource/${idMovie}/${idUser}/criticaUsuarioPelicula?page=${pageNumber}`
      );
    },
    getEstrenosDirector(pageNumber) {
      return callApi(`/customResource/estrenosDirector?page=${pageNumber}`);
    },
    getPeliculaDirector(id) {
      return callApi(`/customResource/${id}/peliculasDirector`);
    },
  },
};

module.exports = api;
