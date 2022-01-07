
const TOKEN_KEY = 'jwt';


// Set Api Key Token At LocalStore \\
export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'U R LOGGED');
}

// Remove Api Key Token From LocalStorage \\
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

// Check if Token Exists \\
export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}