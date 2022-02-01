






// Actions
// const LOAD   = 'quiz/LOAD';
const CREATE = 'quiz/CREATE';
const UPDATE = 'quiz/UPDATE';
const REMOVE = 'quiz/REMOVE';


// 초기값
const initialState = {
    list: [
        { question: "원석이는 여자친구가 없다", answer: false},
        { question: "원석이는 동생이 있다", answer: true},
        { question: "원석이는 키가 182cm다", answer: true},
        { question: "원석이는 몸무게가 60kg다", answer: false},
        { question: "원석이는 가벼운 운동을 한다", answer: true},
    ],
    user_answer: []
}


// Action Creators
// export function loadWidgets() {
//     return { type: LOAD };
// }

export function createUserAnswer(answer) {
    return { 
        type: CREATE,
        answer
    };
}

export function updateWidget(widget) {
    return { 
        type: UPDATE,
        widget
    };
}

export function removeWidget(widget) {
    return { 
        type: REMOVE,
        widget
    };
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "quiz/CREATE": {

        const new_user_answer = [...state.user_answer, action.answer];

        return {...state, user_answer: new_user_answer};
    }
    default: return state;
  }
}