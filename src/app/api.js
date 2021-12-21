// Base API call  //
const apiKey = 'api_key=00d82371d477e875486a05abe6476c67';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?${apiKey}`;

async function getData() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const res = await data.results;
  return res;
}
export default getData;