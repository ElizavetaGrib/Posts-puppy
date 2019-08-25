export default class PostsService {

    _apiUrl = 'https://jsonplaceholder.typicode.com/';

    _postsUrl = `${this._apiUrl}posts`;

    _getResource = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }
        return await response.json();
    };

    _transformPost = ({id, title}) => {
        return {
            id,
            title,
        };
    };

    getPosts = async () => {
        const response = await this._getResource(this._postsUrl);
        return response.map(this._transformPost);
    };

};
