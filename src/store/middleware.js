import axios from "axios";
import {changeIsLoading} from "./reducers/pizzaReducer";

export const apiCall = (store) => (next) => (action) => {

    if (action && action.type !== 'apiCall') {
        next(action)
        return
    }

    next(action)
    const {url, method, data, type} = action.payload
    const baseUrl = 'http://localhost:3001';

    store.dispatch(changeIsLoading(false))

    axios({
        url: baseUrl.concat(url),
        method,
        data
    }).then(resp => {
        store.dispatch({
            type,
            payload: resp.data
        })
    })
}
