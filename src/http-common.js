import axios from "axios";

export default axios.create({
    baseURL: 'https://desafio-mv-backand.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json'
    }
});