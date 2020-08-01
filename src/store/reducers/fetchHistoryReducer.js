import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading: false,
    error: null,
    history: []
}

const convertData = data => {
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let historyData = []
    for(let key in data){
        const [ day, date, month, year ] = key.split("-")
        let workoutTypes = []
        for(let key2 in data[key].workouttypes){
            workoutTypes.push({
                id: key2,
                name: data[key].workouttypes[key2].workoutType,
                count: data[key].workouttypes[key2].count,
                display: false
            })
        }
        historyData.push({
            id: key,
            day: day,
            date: date,
            month: month,
            year: year,
            workoutTypes: [...workoutTypes]
        })
    }
    console.log(historyData)
    let newArray = []
    for(let key in historyData){
        newArray.push({...historyData[key], order: new Date(historyData[key].year, months.indexOf(historyData[key].month), historyData[key].date)})
    }
    newArray.sort((a,b) =>{
        if(a.order > b.order) return -1;
        if(a.order < b.order) return 1;
        return 0
    })
    console.log(newArray)
    return [...newArray]
}

const fetchHistoryReducer = (state = initialState, action)  => {
    switch(action.type){
        case(actionTypes.FETCH_HISTORY_START):
            return {
                ...state,
                loading: true,
                history: []
            }
        case(actionTypes.FETCH_HISTORY_SUCCESS):
            return {
                ...state,
                loading: false,
                error: null,
                history: convertData(action.data)
            }
        case(actionTypes.FETCH_HISTORY_FAILURE):
            return {
                ...state,
                loading: false,
                error: action.error,
                history: []
            }
        default:
            return state
    }
}

export default fetchHistoryReducer