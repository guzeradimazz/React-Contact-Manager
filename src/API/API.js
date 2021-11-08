import axios from 'axios';

export default class PeopleApi{
    static async getAllPeople(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }
}