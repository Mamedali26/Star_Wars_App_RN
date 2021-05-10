const initialState = {
    tempValue: 0,
}

export const tempReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TEMP_ACTION':
            return {
                ...state,
                tempValue: action.data
            }
    }
    return state;
}