import axios from 'axios';

const URL = 'https://fakestoreapi.com/products'

export const getItems=() => axios.get(URL)