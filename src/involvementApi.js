// const appId = 'kjflaxbas123';
// const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/OXo5yjOzhiKMHZxhZ4kt/reservations/';

const postReservation = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getReservation = async (data) => {
  const response = await fetch(url);
  return response.json();
};

export { postReservation, getReservation };