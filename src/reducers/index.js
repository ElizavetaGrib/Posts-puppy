const initialState = {
    loading: false,
    posts: [],
    modalON: false,
    post: {id: '', title: '',},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POSTS_LOADED':
            return {
                ...state,
                posts: action.payload,
                loading: false,
            };
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'MODAL_SWITCHER':
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
