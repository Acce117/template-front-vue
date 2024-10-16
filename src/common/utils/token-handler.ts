const storage = sessionStorage;

export default class TokenHandler {
    private static tokenKey = 'token';
    private static refreshTokenKey = 'refreshToken';
    /**
     * Retrieves the token from storage
     * @return token
     */
    static getToken() {
        return storage.getItem(this.tokenKey);
    }

    /**
     * @param token - token to be stored in storage
     */
    static storeToken(token: string) {
        storage.setItem(this.tokenKey, token);
    }

    /**
     * Retrieves the token used to refresh the actual token from storage
     */
    static getRefreshToken() {
        return localStorage.getItem(this.refreshTokenKey);
    }

    /**
     * @param refreshToken - refresh token to be stored
     */
    static storeRefreshToken(refreshToken: string) {
        localStorage.setItem(this.refreshTokenKey, refreshToken);
    }

    /**
     * removes token from storage
     */
    static removeToken() {
        storage.removeItem(this.tokenKey);
    }

    /**
     * removes refresh token from storage
     */
    static removeRefreshToken() {
        localStorage.removeItem(this.refreshTokenKey);
    }
}