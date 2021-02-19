import axios from 'axios';

const instance = axios.create({
    baseURL: '//Enter your localhost/host' //THE Api (cloud function) URL
});

export default instance;
