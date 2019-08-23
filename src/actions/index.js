const postsLoaded = (posts) => {
    return {
        type: 'POSTS_LOADED',
        payload: posts,
    };
};

const loading = () => {
    return {
        type: 'LOADING',
    };
};

const modalSwitcher = (post) => {
    return {
        type: 'MODAL_SWITCHER',
        payload: post,
    };
};

export {
    postsLoaded,
    loading,
    modalSwitcher,
};
