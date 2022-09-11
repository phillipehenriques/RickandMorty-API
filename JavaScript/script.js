function getAllCaracters() {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error));
}

let select = document.querySelector('select')
funcionarios.forEach((element) => {
    select.options.add(new Option(element.nome, element.id))
})