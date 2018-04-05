const getApiTimeout = () => {
  const savedTimeout = JSON.parse(localStorage.getItem('apiTimeout'));
  return (savedTimeout || savedTimeout === 0) ? savedTimeout : 1000;
};

let users = {
  princessLeia: {
    id: 'princessLeia',
    name: 'Princess Leia',
    avatarURL: 'http://media.comicbook.com/uploads1/2015/05/star-wars-comics-leia-136946.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      'am8ehyc8byjqgar0jgpub9': 'optionTwo',
      'loxhs1bqm25b708cmbf3g': 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  bobaFett: {
    id: 'bobaFett',
    name: 'Boba Fett',
    avatarURL: 'https://thegeeksmenagerie.files.wordpress.com/2014/02/boba-fett-de.jpg',
    answers: {
      'vthrdm985a262al8qx3do': 'optionOne',
      'xj352vofupe1dqz9emx13r': 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  lukeSkywalker: {
    id: 'lukeSkywalker',
    name: 'Luke Skywalker',
    avatarURL: 'https://i.pinimg.com/originals/38/60/ab/3860ab24d61e325e87eaccbfcac3d2f5.jpg',
    answers: {
      'xj352vofupe1dqz9emx13r': 'optionOne',
      'vthrdm985a262al8qx3do': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'princessLeia',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['princessLeia'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'lukeSkywalker',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['lukeSkywalker', 'princessLeia'],
      text: 'become a supervillian'
    }
  },
  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'princessLeia',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['princessLeia'],
      text: 'be telepathic'
    }
  },
  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'bobaFett',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['princessLeia'],
      text: 'be a back-end developer'
    }
  },
  'vthrdm985a262al8qx3do': {
    id: 'vthrdm985a262al8qx3do',
    author: 'bobaFett',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['bobaFett'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['lukeSkywalker'],
      text: 'have your best friend find $500'
    }
  },
  'xj352vofupe1dqz9emx13r': {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'lukeSkywalker',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['lukeSkywalker'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['bobaFett'],
      text: 'write Swift'
    }
  }
};

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function _getUsers () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...users}), getApiTimeout());
  });
}

export function _getQuestions () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({...questions}), getApiTimeout());
  });
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  };
}

export function _saveQuestion (question) {
  return new Promise((resolve, reject) => {
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      };

      resolve(formattedQuestion);
    }, getApiTimeout());
  });
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      };

      resolve();
    }, 500);
  });
}
