






// Actions
// const LOAD   = 'quiz/LOAD';
// const CREATE = 'user/CREATE';
const UPDATE = 'user/UPDATE';
// const REMOVE = 'user/REMOVE';


// 초기값
const initialState = {
    user_name : "하늘이"
}


// Action Creators
export function updateUserName(user_name) {
    return { 
        type: UPDATE,
        user_name
    };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'user/UPDATE': {
        return {...state, user_name: action.user_name};
    }
    default: return state;
  }
}