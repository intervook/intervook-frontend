function logoutApi() {
  const url = `api/auth/logout`;

  fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => console.log(result));
}

export default logoutApi;
