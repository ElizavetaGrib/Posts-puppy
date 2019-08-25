import {actionTypes} from '../actions';

const initialState = {
    loading: false,
    posts: [],
    modalON: false,
    post: undefined,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POSTS_LOADED:
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case actionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.MODAL_SWITCHER:
            return {
                ...state,
                post: action.payload,
                modalON: !state.modalON,
            };
        default:
            return state;
    }
};

export default reducer;
