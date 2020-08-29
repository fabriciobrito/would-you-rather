import React from 'react';
import { Card, CardTitle, Row, Col } from 'react-materialize';

const RankCard = (props) => {
  const { avatar, name, answers, questions } = props;
  return(
    <Card
        horizontal
        header={<CardTitle image={avatar} />}
        title={name}
      >
        <Row>
          <Col s={3}><p>Answered Questions:</p></Col>
          <Col s={1}>{answers}</Col>
          <Col s={2}><h6>Score</h6></Col>
        </Row>
        <Row>
          <Col s={3}><p>Created Questions:</p></Col>
          <Col s={1}>{questions}</Col>
          <Col s={2}><h6>{ answers + questions }</h6></Col>
        </Row>
      </Card>
  )
}

export default RankCard;