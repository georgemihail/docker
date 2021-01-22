import axios from 'axios';

const baseUrl = "/api/persons";

const getAll = () =>
{
    const request = axios.get(baseUrl);
    return request.then(result => result.data)
}

const create = (newObject) =>
{
    const request = axios.post(baseUrl, newObject);
    return request.then(result => {
        console.log("The result is: ",result);
        return result.data
    });
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(result => result.data);
}

const deletePerson = (id) =>
{
    const request = axios.delete(`${baseUrl}/${id}`);
    return request
}

export default {getAll, create, update, deletePerson}