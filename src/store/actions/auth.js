import * as actionTypes from './actionTypes'
import axios from 'axios'

export const auth = (data, signup) => {
    return dispatch => {
        dispatch(authStart())
        var userData = {
            ...data,
            returnSecureToken: true
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyADVmRnbFxNxAhkjArmAHekLl6nnRU4dqs`
        if(signup){
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyADVmRnbFxNxAhkjArmAHekLl6nnRU4dqs`
        }
        axios.post(url, userData)
        .then(response => {
            console.log(response.data)
            localStorage.setItem('userId',response.data.localId)
            localStorage.setItem('token', response.data.idToken)
            dispatch(authSuccess(response.data.localId, response.data.idToken))
            return response.data
        })
        .catch(err => {
            console.log(err.content)
            dispatch(authFailure("Wrong Email Id or Password"));
            // console.log(err['message'])
        });
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (userId, token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId,
        token: token
    }
}

export const authFailure = (error) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
}

export const authCheck = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        
        if(!token){
            dispatch(logout())
        }
        else {
            const userId = localStorage.getItem('userId')
            dispatch(authSuccess(userId, token))
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    return{
        type: actionTypes.LOGOUT
    }
}