import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload} // 위의 상태를 똑같이 가져온 것.
        
        case REGISTER_USER:
            return {...state, register: action.payload}

        case AUTH_USER:
            return {...state, userData: action.payload}

        default:
            return state;
    }
}