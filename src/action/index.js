import * as types from './ActionTypes';

export function increnemt() {
    return {
        type: types.INCREMENT,
    };
}

export function decrement() {
    return {
        type: types.DECREMENT,
    };
}

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color
    };
}