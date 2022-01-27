
// Actions
// const LOAD = 'my-app/widgets/LOAD';
// const CREATE = 'quiz/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'quiz/REMOVE';
const ADD_ANSWER = "quiz/ADD_ANSWER";

// 초기값
const initialState = {
   quiz: [
       {question: "키가 182cm 이다.", answer: "O"},
       {question: "군대 가기 전 몸무게는 103키로였다", answer: "O"},
       {question: "고향은 충청도다.", answer: "X"},
       {question: "여자친구가 없다.", answer: "X"},
       {question: "친동생이 있다.", answer: "O"}
    ],

    user_answer_list: []

}


// Action Creators

export const addAnswer = (user_answer) => {
    return {
        type: ADD_ANSWER,
        user_answer
    }
}


// export function loadWidgets() {
//     return {
//         type: LOAD
//     };
// }

// export function createWidget(widget) {
//     return {
//         type: CREATE,
//         widget
//     };
// }

// export function updateWidget(widget) {
//     return {
//         type: UPDATE,
//         widget
//     };
// }

// export function removeWidget(widget) {
//     return {
//         type: REMOVE,
//         widget
//     };
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        
        case "bucket/CREATE": {
        
        }

        default:
            return state;
    }
}

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// export function getWidget () {
// return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }