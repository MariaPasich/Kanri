interface User extends Object {
    username: string,
    email: string
}

export const setUser = (user: User) => {
    localStorage.setItem("K_USER_USERNAME", user.username);
    localStorage.setItem("K_USER_EMAIL", user.email);
}

export const deleteUser = (user: User) => {
    localStorage.setItem("K_USER_USERNAME", "NO_INFO");
    localStorage.setItem("K_USER_EMAIL", "NO_INFO");
}