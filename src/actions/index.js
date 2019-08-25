const actionTypes = {
    POSTS_LOADED: 'POSTS_LOADED',
    LOADING: 'LOADING',
    MODAL_SWITCHER: 'MODAL_SWITCHER',
};

const postsLoaded = (posts) => {
    return {
        type: actionTypes.POSTS_LOADED,
        payload: posts,
    };
};

const loading = () => {
    return {
        type: actionTypes.LOADING,
    };
};

const modalSwitcher = (post) => {
    return {
        type: actionTypes.MODAL_SWITCHER,
        payload: post,
    };
};

export {
    actionTypes,
    postsLoaded,
    loading,
    modalSwitcher,
};
