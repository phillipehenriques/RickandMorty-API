function getAllCaracters() {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => response)
        .catch(error => error);
}

// const personagens = getAllCaracters();

// personagens.forEach((element) => {
//     element.result.image
// })

// const photoCharacter = document.getElementById('photo').innerHTML = personagens.results.image
// const nameCharacter = document.getElementById('name')
// const classCharacter = document.getElementById('class')
// const colorBox = document.getElementById('color')
// const statusCharacter = document.getElementById('status')
// const localCharacter = document.getElementById('local')

