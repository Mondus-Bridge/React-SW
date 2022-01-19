import { HTTP, HTTPS } from "../constants/api";


/** 
 * Изменяет URL c HTTP na HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url c HTTPS
*/


export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    return result;
}


export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);
        return await res.json(); 
        if (!res.ok) {
        console.error('could not fetch.', res.status);
        return false
        }
    } catch (error) {
        console.error('could not fetch.', error.message);
        return false
    }
}

export const makeConCurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res)
        .then(res => res.json())
    }));

    return res
}



