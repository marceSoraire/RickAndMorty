import axios from 'axios';

const all = async (state) => {
    const res = await axios.get('https://rickandmortyapi.com/api/character')
    state(res.data.results)
}

const unique = async (id, state) => {
    const respuesta = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(respuesta.data)
}

export {
    all,
    unique
}