






// Actions
// const LOAD   = 'quiz/LOAD';
const CREATE = 'quiz/CREATE';
const UPDATE = 'quiz/UPDATE';
const REMOVE = 'quiz/REMOVE';


// 초기값
const initialState = {
    user_name : "하늘이"
}


// Action Creators
export function createWidget(widget) {
    return { 
        type: CREATE,
        widget
    };
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case 'quiz/CREATE': {
        return state;
    }
    default: return state;
  }
}