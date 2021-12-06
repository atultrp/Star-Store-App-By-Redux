export const addItem = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'addItem',
            payload: amount
        })
    }
}

export const removeItem = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'removeItem',
            payload: amount
        })
    }
}