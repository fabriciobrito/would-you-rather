import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from '../actions/questions';

export default function questions(state = null, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION:
      const { qid, authedUser, answer} = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}