import axios from 'axios';

/* export async function getFilms(){
    try{
        const resp = await fetch('../../movies.json');
        if (!resp.ok) throw new Error('Error!');
        return await resp.json();
    } catch(err) {
        console.error((`Error: ${err}`));
        return [];
    }
} */

const app = axios.create({
    baseURL: '/',
    timeout: 3000
})

export async function getFilms() {
    const resp = await app.get('movies.json');
    return resp.data;
}