import { DATA_RECIEVED } from '../../actions/index'

const initialState = () => {
    return {}
}
const ResultPage = (state = initialState(), action) => {
    switch (action.type) {
        case DATA_RECIEVED:
            return { ...state, details: action.details, filters: action.filters }
        default:
            return state
    }
}
export default ResultPage