import { fetchDogs } from './data.js'
import { displayDogs } from './ui.js'

const response = (dogs) => {
    displayDogs(dogs);
}

const init = () => {
    console.log('init...');
    fetchDogs(response);
}

export { init, response }