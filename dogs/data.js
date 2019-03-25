

const fetchDogs = (res) => {
    const allPromises = [];

    for (let i = 0; i < 10; i++) {
        const dog = fetch('https://dog.ceo/api/breeds/image/random')
            .then(dogs => dogs.json())
            .then(dogsImgs => dogsImgs.message)
        allPromises.push(dog);
    }
    res(allPromises);
}

export { fetchDogs }