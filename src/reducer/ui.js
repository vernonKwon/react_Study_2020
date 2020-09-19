import * as types from '../action/ActionTypes';

const init = {
    color: [200,200,200],
};

export default function ui(state = init, action) {
    if (action.type === types.SET_COLOR) {
        return {
            color: action.color,
        };
    } else {
        return state;
    }
}