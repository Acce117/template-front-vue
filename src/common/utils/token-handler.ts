const storage = sessionStorage;

export default class TokenHandler {

    /**
     * Retrieves the token from storage
     * @return token
     */
    static getToken() {
        return storage.getItem('token');
    }

    /**
     * @param token - token to be stored in storage
     */
    static storeToken(token: string) {
        storage.setItem('token', token);
    }

    /**
     * Retrieves the token used to refresh the actual token from storage
     */
    static getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    /**
     * @param refreshToken - refresh token to be stored
     */
    static storeRefreshToken(refreshToken: string) {
        localStorage.setItem('refreshToken', refreshToken);
    }

    /**
     * removes token from storage
     */
    static removeToken() {
        storage.removeItem('token');
    }

    /**
     * removes refresh token from storage
     */
    static removeRefreshToken() {
        localStorage.removeItem('refreshToken');
    }
}