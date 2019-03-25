import { displayUsers } from './ui.js'
import { response } from './app.js'
import UserObj from './entities/entitiesUser.js'

const fetchData = () => {
    const fetchPromise = fetch('https://randomuser.me/api?results=15')
        .then((response) => {
            console.log(response);
            return response.json()

        })
        .then((responseShows) => {
            const obj = responseShows.results.map(elem => (
                new UserObj(
                    elem.gender,
                    elem.name,
                    elem.email,
                    elem.dob.date,
                    elem.picture.thumbnail,
                    elem.login.username,
                )
            ));
            return obj;
        })
    console.log(fetchPromise);
    return fetchPromise;
}

export {
    fetchData
}