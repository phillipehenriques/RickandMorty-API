function getAllCaracters() {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => response)
        .catch(error => error);
}

const personagens = getAllCaracters();

personagens.forEach((element) => {
    element.result.image
})

document.getElementById('photo').innerHTML = personagens['results']['image']
document.getElementById('name').innerHTML = personagens['results']['name']
document.getElementById('class').innerHTML = personagens['results']['']
document.getElementById('color').innerHTML = personagens['results']['']
document.getElementById('status').innerHTML = personagens['results']['']
document.getElementById('local').innerHTML = personagens['results']['']

