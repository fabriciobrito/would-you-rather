import React from 'react';
import { CardPanel, ProgressBar, Badge, Row, Col } from 'react-materialize';

const OptionResultCard = (props) => {
  const { text, votes, total, voted } = props;
  return(
    <CardPanel>
      {voted && (<Badge caption='Your Vote' className='new' />)}
      <Row>
        <Col s={12}>
          <h6>{text}</h6>
        </Col>
        <Col s={12}>
          <ProgressBar progress={100*votes / total} />
        </Col>
        <Col s={12}>
          {votes} out of {total} votes ({Math.round(votes*100/total)}%)
        </Col>
      </Row>
    </CardPanel>
  )
}

export default OptionResultCard;