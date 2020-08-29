import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

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

export function handleAnswerQuestion( qid, answer ) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    // Since the API does not return anything,
    // the same obj is used both for local state mgmt and DB
    const info = {
      authedUser,
      qid,
      answer
    }
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
      .then(dispatch(hideLoading()));
    //ToDo: Handle DB error
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion ( optionOneText, optionTwoText ) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(dispatch(hideLoading()));
    //ToDo: Handle DB error
  }
}