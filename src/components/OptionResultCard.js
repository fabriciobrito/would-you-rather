import React from 'react';
import { CardPanel, ProgressBar, Row, Col } from 'react-materialize';

const OptionResultCard = (props) => {
  const { text, votes, total, voted } = props;
  console.log(props);
  return(
    <CardPanel>
      <span>
        {text}
        {voted && (
          <span> (Your Vote)</span>
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