import { LOGIN_URL_DEV, LOGIN_URL_PROD } from '../common/constants';

const loginUser = async (uEmail, uPassword) => {
  const data = {
    uEmail,
    uPassword
  };

  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  };

  const { ok, message, loginData } = await fetchData(url, params);

  const { token, username } = loginData;

  return {
    loginStatus: ok,
    message,
    token,
    username
  };
}

const fetchData = async (url, params) => {
  const response = await fetch(LOGIN_URL_DEV, params)
    .catch((error) => { console.error(error); });

  const { ok, message, loginData } = await response.json()
    .catch((error) => { console.error(error); });

  return {
    ok,
    message,
    loginData
  };
}

export default loginUser;
