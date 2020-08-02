const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://britoflix.herokuapp.com';

export { URL_BACKEND };
