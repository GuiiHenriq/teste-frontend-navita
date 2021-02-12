import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1"
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  }
}
