import { fetchData } from './data.js';
import { displayUsers } from './ui.js'

const response = (data) => {
    displayUsers(data);
}

const init = () => {
    fetchData().then(response);
}

export { init, response }