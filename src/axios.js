import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/ecommerce-ed61b/us-central1/api' //THE Api (cloud function) URL
});

export default instance;