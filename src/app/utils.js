const appKey = '9uqyZOQFpDQg1vVFgpx9';
const involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/`;

// Display Likes
export const displayLikes = (movies, domElement, data) => {
  for (let i = 0; i < movies.length; i += 1) {
    for (let j = 0; j < data.length; j += 1) {
      if (movies[i].id === Number(data[j].item_id)) {
        if (Number(domElement[i].parentElement.id) === movies[i].id) {
          if (data[j].likes <= 1) {
            domElement[i].innerText = `${data[j].likes} Like!`;
          } else {
            domElement[i].innerText = `${data[j].likes} Likes!`;
          }
        }
      }
    }
  }
};

// POST Like to API
export async function addLike(movieObj) {
  const response = await fetch(`${involvementApiUrl}likes`, {
    method: 'POST',
    body: JSON.stringify(movieObj),
    headers: { 'Content-Type': 'application/json' },

  });
  return response;
}
