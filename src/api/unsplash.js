import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 825eb8effca6c9f73366711871d47895b695bf22b9090e9e6fa8c9d015900ea0'
    }
});