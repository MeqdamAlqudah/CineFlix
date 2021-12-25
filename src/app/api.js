// Base API call  //
export const sendCommentsToApi = ({
  type, body,
}) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rEViJgSZrOmcE6w0blo4/comments';
  fetch(url, {
    method: type,
    body,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
};

export const reciveCommentsApi = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rEViJgSZrOmcE6w0blo4/comments?item_id=${id}`;
  const myRequest = new Request(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    mode: 'cors',
    cache: 'default',
  });
  const data = await fetch(myRequest);
  return data;
};

const apiKey = 'api_key=00d82371d477e875486a05abe6476c67';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?${apiKey}`;

export const getData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const res = await data.results;
  return res;
};

// Involvement API Likes Call
const appKey = 'rEViJgSZrOmcE6w0blo4';
const involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/`;
export const getInvolvement = async (extension) => {
  const response = await fetch(`${involvementApiUrl}${extension}`);
  const result = await response.json();
  return result;
};
