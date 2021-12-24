const appKey = 'rEViJgSZrOmcE6w0blo4';
const involvementApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appKey}/`;

// Display Likes
export const displayLikes = (domElement, data) => {
  domElement.forEach((element, index) => {
    if (element.parentElement.id === data[index].item_id) {
      element.innerHTML = `${data[index].likes} Likes!`;
    }
  });
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
