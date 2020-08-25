export function formatQuestion (question, author, authedUser) {
  const { id, optionOne, optionTwo, timestamp } = question
  const { name, avatarURL, answers } = author

  return {
    id,
    timestamp,
    optionOne,
    optionTwo,
    name,
    avatar: avatarURL,
    answer: answers[id]
  }
}