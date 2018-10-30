const $ = require('jquery');
export const DATA_RECIEVED = 'DATA_RECIEVED'

export const searchPressed = (filters) => {
    return dispatch => {
        dispatch(getResults(filters))
    }
}

const getResults = (filters) => {
    let selectedFilters = []
    filters.forEach((filter, index) => {
        if (filter) {
            selectedFilters.push(index)
        }
    })
    console.log('selected filters:', selectedFilters)
    return dispatch => {
        $.get('data.json', function (res) {
            console.log("res from getResults:", res)
            //filtering
            dispatch(setResults(res.transactions, selectedFilters))
        });
    }
}

const setResults = (details, filters) => {
    return {
        type: DATA_RECIEVED,
        details,
        filters
    }
}
