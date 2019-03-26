function action(type, payload = {}) {
    return { type, ...payload };
}

// Default Actions
export const GET_NEWS = 'GET_NEWS';

// Actions Creators
export const getNews = () => action(GET_NEWS);
export default getNews;
