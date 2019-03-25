

const displayDogs = (dogs) => {
    //console.log(dogs);
    const $body = document.querySelector('body');


    Promise.all(dogs)
        .then((dogsImages) => {
            dogsImages.forEach(dogUrl => {
                const $img = document.createElement('img');
                $img.setAttribute('src', `${dogUrl}`)
                $body.appendChild($img);
            })
        })

}

export { displayDogs }

