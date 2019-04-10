import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'

// Components
import easternLogo from '../images/Eastern_Conference.png'
import westernLogo from '../images/Western_Conference.png'

export default class UserVote extends Component {
  render() {
    return (
      <Col xs={12} md={6} lg={3}>
        <Card>
          <Card.Header>
            <Card.Title>
              {this.props.match < 4 ? <img className='nhl-logo' src={easternLogo} alt='NHL Logo' /> : <img className='nhl-logo' src={westernLogo} alt='NHL Logo' />}
              Match {this.props.match + 1}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Row className='user-series-vote'>
              <Col xs={4}>
                <img src={this.props.team1.img} alt={this.props.team1.name} />
              </Col>
              <Col xs={7} className={this.props.team1.score === 4 && 'user-series-vote-score font-bold'}>
                <p>{this.props.team1.name} {this.props.team1.score}</p>
              </Col>
            </Row>
            <Row className='user-series-vote'>
              <Col xs={4}>
                <img src={this.props.team2.img} alt={this.props.team2.name} />
              </Col>
              <Col xs={7} className={this.props.team2.score === 4 && 'user-series-vote-score font-bold'}>
                <p>{this.props.team2.name} {this.props.team2.score}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
