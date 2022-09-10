function getAllCaracters() {
    return axios.get('https://rickandmortyapi.com/api/character')
        .then(response => Promise.resolve(response))
        .catch(error => Promise.reject(error));
}

