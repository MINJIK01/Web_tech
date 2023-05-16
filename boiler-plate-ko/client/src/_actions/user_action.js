import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from './types';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data) // 클라이언트에서 받은 데이터를 request에 저장

    return {
        type: LOGIN_USER,
        payload: request
    }

}


export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
    .then(response => response.data) // 클라이언트에서 받은 데이터를 request에 저장

    return {
        type: REGISTER_USER,
        payload: request
    }

}

export function auth() { // get method라서 body 부분은 필요 없다.

    const request = axios.get('/api/users/auth')
    .then(response => response.data) // 클라이언트에서 받은 데이터를 request에 저장

    return {
        type: AUTH_USER,
        payload: request
    }

}
