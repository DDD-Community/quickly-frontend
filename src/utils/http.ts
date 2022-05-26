import axios from 'axios';
import CustomError from './erros';
import { navigate } from '~/../App';

const customError = new CustomError(navigate);
const baseURL = 'https://swapi.dev/api/';

const http = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

http.interceptors.request.use(
  function (config: any) {
    // const accessToken = 'access_token';
    // config.headers.Authorization = `Bearer ${accessToken}`;
    console.group(config.url);
    console.log('[ request - config ] ', config);
    return config;
  },
  function (error) {
    console.group('request error');
    console.log('[ request - error ] ', error);
    return Promise.reject(error);
  },
);

http.defaults.validateStatus = function (status) {
  // 커스텀한 에러들 > validateStatus에서 처리
  console.log('[ validateStatus ] ', status);
  return true;
};

http.interceptors.response.use(
  (response: any) => {
    console.log('[ response - response ] ', response);
    console.groupEnd();
    return Promise.resolve(response.data);
  },
  error => {
    console.log('[ response - error ] ', error);
    customError.handleError(error);

    console.groupEnd();
    return Promise.reject(error);
  },
);

export default http;
export const fetch = async (
  url: any,
  options: { body?: any; method: any; headers?: any },
) => {
  const { body, method, headers } = options;
  const req = {
    url,
    method,
    headers: {
      ...headers,
    },
    data: body,
  };

  try {
    const res = await http(req);
    console.log(res);
    return res.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
