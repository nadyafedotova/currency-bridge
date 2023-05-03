import { initialStateDate } from './typies';

export const dateReducer = (state = initialStateDate, action) => {
    switch (action.type) {
        case 'SELECT_DATE':
            return {
                ...state,
                selectedDate:action.payload,
            };
        default:
            return state;
    }
};

export const visibilityReducer = (state = {
    converterVisible:false,
    descriptionVisible:true,
}, action) => {
    switch (action.type) {
        case 'TOGGLE_CONVERTER_VISIBILITY':
            return {
                ...state,
                converterVisible:true,
                descriptionVisible:false,
            };
        case 'HIDE_CONVERTER':
            return {
                ...state,
                converterVisible:false,
                descriptionVisible:true,
            };
        default:
            return state;
    }
};

