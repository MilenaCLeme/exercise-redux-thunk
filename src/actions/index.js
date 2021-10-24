export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return async (dispatch) => {
    const api = await fetch('https://aws.random.cat/meow')
    const resultado = await api.json();
    return dispatch(getPicture(resultado));  
  };
}
