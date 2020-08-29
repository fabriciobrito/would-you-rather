import { saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function answerQuestion(info) {
  return {
    type: ANSWER_QUESTION,
    ...info
  }
}

export function handleAnswerQuestion( qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser,
      qid,
      answer
    }
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .then(dispatch(hideLoading()));
  }
}