import { URL_BACKEND } from '../config';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

const create = (objetoDoVideo) => {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  }).then(async (res) => {
    if (res.ok) {
      const result = await res.json();
      return result;
    }

    throw new Error('Não foi possivel cadastrar os dados');
  });
};

export default {
  create,
};
