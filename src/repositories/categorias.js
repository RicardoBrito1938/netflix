import { URL_BACKEND } from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

const getAll = () => {
  return fetch(`${URL_CATEGORIES}`).then(async (res) => {
    if (res.ok) {
      const result = await res.json();
      return result;
    }

    throw new Error('Não foi possivel pegar os dados');
  });
};

const getAllWithVideos = () => {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const result = await res.json();
      return result;
    }

    throw new Error('Não foi possivel pegar os dados');
  });
};

export default {
  getAllWithVideos,
  getAll,
};
