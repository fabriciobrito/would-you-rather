import React from 'react';
import { Card, CardTitle, Table, Badge } from 'react-materialize';
import { formatOrdinal } from '../utils/helpers'

const RankCard = (props) => {
  const { avatar, name, answers, questions, position } = props;
  return(
    <Card
        horizontal
        header={<CardTitle image={avatar} />}
      >
        <span className='card-title'>
          {name}
          <Badge
            style={{'font-size': '2.5rem'}}
            caption={formatOrdinal(position)}
          />
        </span>
        <Table className='centered highlight'>
          <thead>
            <tr>
              <th data-field="answers">
                Questions Answered
              </th>
              <th data-field="questions">
                Questions Created
              </th>
              <th data-field="score" className='teal lighten-2 white-text'>
                Total Score
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {answers}
              </td>
              <td>
                {questions}
              </td>
              <td className='teal lighten-2 white-text flow-text'>
                <strong>{answers + questions}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
  )
}

export default RankCard;