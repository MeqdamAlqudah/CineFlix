// Base API call  //
export const sendCommentsToApi = ({
  type, body,
}) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OXo5yjOzhiKMHZxhZ4kt/comments';
  fetch(url, {
    method: type,
    body,
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });
};

export const reciveCommentsApi = async (id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OXo5yjOzhiKMHZxhZ4kt/comments?item_id=${id}`;
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

async function getData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const res = await data.results;
  return res;
}
export default getData;