import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { getInitialData } from '../utils/api';

//Temporary set authed user from existing questions on database
//ToDo: remove default authed_user
const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(AUTHED_ID));
      })
  }
}
