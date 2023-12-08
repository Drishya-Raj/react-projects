const initialState = {
    username : ''
};

const Reducers = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state,
                username: action.payload,
            };
        default:
            return state;    
    }
};
export default Reducers;