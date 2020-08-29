import { RECEIVE_USERS } from '../actions/users';
import { ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export default function users(state = null, action) {
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION:
      const { qid, authedUser, answer} = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case ADD_QUESTION:
      const { author, id } = action.question;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    default:
      return state
  }
}