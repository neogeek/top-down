const USER_TOKEN_KEY = 'trello_token';

const getUserToken = () => localStorage.getItem(USER_TOKEN_KEY);

const setUserToken = token => localStorage.setItem(USER_TOKEN_KEY, token);

const removeUserToken = token => localStorage.removeItem(USER_TOKEN_KEY);

const getTokenFromUrl = () => {
    const tokenParam = window.location.hash.match(/token=([^&]+)/);

    if (tokenParam) {
        return tokenParam[1];
    }

    return null;
};

export { getUserToken, setUserToken, removeUserToken, getTokenFromUrl };
