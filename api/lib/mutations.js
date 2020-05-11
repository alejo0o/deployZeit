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
  //Noticias
  createNoticia: async (root, { input }) => {
    let noticia;
    try {
      noticia = await fetchData.noticias.create(input);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }

    return noticia;
  },
  editNoticia: async (root, { id, input }) => {
    let noticia;
    const defaults = await fetchData.noticias.read(id); //obtengo los datos default de la base
    const newMovie = Object.assign(defaults, input); //esto evita que tome el resto de argumentos
    //como nulos y se caiga el edit
    try {
      noticia = await fetchData.noticias.update(id, newMovie);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return noticia;
  },
  deleteNoticia: async (root, { id }) => {
    try {
      await fetchData.noticias.remove(id);
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
  //Criticas
  createCritica: async (root, { input }) => {
    let critica;
    try {
      critica = await fetchData.criticas.create(input);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }

    return critica;
  },
  editCritica: async (root, { id, input }) => {
    let critica;
    const defaults = await fetchData.criticas.read(id); //obtengo los datos default de la base
    const newMovie = Object.assign(defaults, input); //esto evita que tome el resto de argumentos
    //como nulos y se caiga el edit
    try {
      critica = await fetchData.criticas.update(id, newMovie);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return critica;
  },
  deleteCritica: async (root, { id }) => {
    try {
      await fetchData.criticas.remove(id);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return `200: Eliminado exitoso de registro con id ${id}`;
  },
  //Usuarios
  createUsuario: async (root, { input }) => {
    let usuario;
    try {
      usuario = await fetchData.usuarios.create(input);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return usuario;
  },
  editUsuario: async (root, { id, input }) => {
    let usuario;
    const defaults = await fetchData.usuarios.read(id); //obtengo los datos default de la base
    const newUser = Object.assign(defaults, input); //esto evita que tome el resto de argumentos
    //como nulos y se caiga el edit
    try {
      usuario = await fetchData.usuarios.update(id, newUser);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return usuario;
  },
  deleteUsuario: async (root, { id }) => {
    try {
      await fetchData.usuarios.remove(id);
    } catch {
      throw new Error('Fallo en la operacion del servidor');
    }
    return `200: Eliminado exitoso de registro con id ${id}`;
  },
};

module.exports = mutations;
