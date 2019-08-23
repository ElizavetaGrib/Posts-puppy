import {createContext} from 'react';

const {
    Provider: PostsServiceProvider,
    Consumer: PostsServiceConsumer
} = createContext();

export {
    PostsServiceProvider,
    PostsServiceConsumer,
};
