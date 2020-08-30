import React from 'react';
import { CardPanel, ProgressBar, Badge, Row, Col } from 'react-materialize';

const OptionResultCard = (props) => {
  const { text, votes, total, voted } = props;
  return(
    <CardPanel>
      <span>
        {text}
        {voted && (
          <Badge>Your Vote</Badge>
        )}
      </span>
      <Row>
        <Col s={3}>
          <ProgressBar progress={100*votes / total} />
        </Col>
        <p>{votes} out of {total} votes</p>
      </Row>
    </CardPanel>
  )
}

export default OptionResultCard;