const storage = sessionStorage;

function getToken (){
    return storage.getItem('token');
}

function storeToken (token: string){
    storage.setItem('token', token);
}

function getRefreshToken () {
    return localStorage.getItem('refreshToken');
}

function storeRefreshToken (refreshToken: string){
    localStorage.setItem('refreshToken', refreshToken);
}

function removeToken (){
    storage.removeItem('token');
}

function removeRefreshToken() {
    localStorage.removeItem('refreshToken');
}

const tokenHandler = {
    getToken,
    storeToken,
    getRefreshToken,
    storeRefreshToken,
    removeRefreshToken,
    removeToken
}

export default tokenHandler;