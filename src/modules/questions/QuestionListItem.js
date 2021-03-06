import React from 'react';
import { Link } from 'react-router-dom';

import { conciseDateTime, makeUrl } from 'modules/shared/helpers';

export default function Question ({ question }) {
  return (
    <React.Fragment>
      <span style={{ width: 165, display: 'inline-block' }}>{conciseDateTime(new Date(question.timestamp))}</span>
      <Link to={makeUrl(`/questions/${question.id}`)}>
        {question.optionOne.text} : {question.optionTwo.text}
      </Link>
    </React.Fragment>
  );
}
