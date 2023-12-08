export const setUsername = (username) => {
    return{
        type : 'ADD_USER',
        payload : username,
    };
}