interface ILoginApi {
  email: string;
  password: string;
}

function loginApi({ email, password }: ILoginApi) {
  const url = `/api/auth/login?email=${email}&password=${password}`;

  return fetch(url, {
    method: 'POST',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      return result;
    });
}

export default loginApi;
