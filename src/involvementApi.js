const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9uqyZOQFpDQg1vVFgpx9/reservations/';
const getUrl = `${url}?item_id=`;
const postReservation = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response;
};

const getReservation = async (id) => {
  const response = await fetch(`${getUrl}${id}`);
  const data = await response.json();
  if (response) {
    return data;
  }
  return 0;
};

export { postReservation, getReservation };