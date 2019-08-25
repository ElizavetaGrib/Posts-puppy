import React from 'react';

import {PostsServiceConsumer} from '../posts-service-context';

const withPostsService = () => (Wrapped) => {
    return (props) => {
        return (
            <PostsServiceConsumer>
                {
                    (postsService) => {
                        return (<Wrapped postsService={postsService}
                                         {...props}/>);
                    }
                }
            </PostsServiceConsumer>
        );
    };
};

export default withPostsService;
