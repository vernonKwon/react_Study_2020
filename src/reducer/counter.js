import * as types from '../action/ActionTypes';

const init = {
    number: 0,
};

export default function counter(state = init, action) {
    switch (action.type) {
        case types.INCREMENT: {
            return { ...state, number: state.number + 1 };
        }

        case types.DECREMENT: {
            return { ...state, number: state.number - 1 };
        }

        default: {
            return state;
        }
    }
}