import axios from 'axios';

const listAll = () => {
    const URL = 'http://localhost:8080/React/pessoa/list';
    return axios.get(URL).then(response => response.data);
}

const listAllPage = () => {
    const URL = 'http://localhost:8080/React/pessoa/listPage';
    return axios.get(URL).then(response => response.data);
}
export {
    listAll,
    listAllPage
}