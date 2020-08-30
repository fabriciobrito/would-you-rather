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

export function formatOrdinal (number) {
  switch(/.$/.exec(number)[0]) {
    case '1':
      return `${number}st`;
    case '2':
      return `${number}nd`;
    case '3':
      return `${number}rd`;
    default:
      return `${number}th`;
  }
}