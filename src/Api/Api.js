import axios from 'axios'

const instance = axios.create({
    baseURL: 
     'https://62a1bd60cc8c0118ef5363d3.mockapi.io/api/v1/contacts'
})

export const getContacts = async () => {
    const { data } = await instance.get('/')
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await instance.post('/', data)
    return result;
}

export const removeContact = async (id) => {
    const {data: result} = await instance.delete(`/${id}`)
    return result
}