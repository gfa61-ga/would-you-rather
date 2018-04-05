import React from 'react';

export default class Question extends React.Component {
  render () {
    return <h1>Question {this.props.match.params.question_id}</h1>;
  }
}
