import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchHistoryStart = () => {
    return {
        type: actionTypes.FETCH_HISTORY_START
    }
}

export const fetchHistory = () => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        console.log(userId)
        dispatch(fetchHistoryStart())
        axios.get(`https://gym-management-sys.firebaseio.com/${userId}.json`)
        .then(res => {
            // console.log(res.data)
            // var newArray = []
            // for(let key in res.data){
            //     console.log(key)
            //     console.log(res.data[key].year, res.data[key].month, res.data[key].date)
            //     newArray.push({...res.data[key], order: new Date(res.data[key].year, 5, res.data[key].date)})
            // }
            // newArray.sort((a,b) =>{
            //     if(a.order > b.order) return -1;
            //     if(a.order < b.order) return 1;
            //     return 0
            // })
            // console.log(newArray)
            let keys = []
            for(let key in Object.entries(res.data)){
                keys.push(Object.entries(res.data)[key][0])
            }
            if(keys.length > 30){
                dispatch(deleteHistory(keys[30]))
            }
            dispatch(fetchHistorySuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchHistoryFailure(err))
        })
    }
}

export const fetchHistorySuccess = data => {
    return {
        type: actionTypes.FETCH_HISTORY_SUCCESS,
        data: data
    }
}

export const fetchHistoryFailure = error => {
    return {
        type: actionTypes.FETCH_HISTORY_FAILURE,
        error: error
    }
}

export const deleteHistory = lastDayId => {
    return dispatch => {
        const userId = localStorage.getItem('userId')
        axios.delete(`https://gym-management-sys.firebaseio.com/${userId}/${lastDayId}.json`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
}