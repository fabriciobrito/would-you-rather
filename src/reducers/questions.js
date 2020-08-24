import { RECEIVE_QUESTIONS } from '../actions/questions';

export default function questions(state = null, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}