async function getUser() {
  return await fetch('/api/user', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => result);
}

export default getUser;
