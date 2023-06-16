import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const client = axios.create({baseURL: BASE_URL});

export async function createProduct(data) {
  const response = await client.post('/products', data);

  return response.data;
}

export async function getProducts() {
  const response = await client.get('/products');

  return response.data;
}
