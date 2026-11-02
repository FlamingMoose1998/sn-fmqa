var ioQuiz = Class.create();
ioQuiz.prototype = {
  initialize: function () {
    this.logger = new x_0221_fmqa.logger();
  },

  read: function (grQuiz) {
    this.logger.log('read')
    const io = new x_0221_fmqa.io();
    const quizJson = io.getJsonFromGlideRecord(grQuiz, [
      'sys_id',
      'name',
      'number',
      { fieldName: 'audience', type: 'display' },
      { fieldName: 'date', type: 'date' },
    ])


    quizJson.rounds = this.getRounds(quizJson.sys_id);

    return quizJson;
  },

  /**
 * Writes a quiz and all its components to the database
 * @param {Quiz} quizJson
 * @returns {string} quizSysId
 */
  write: function (quizJson) {
    this.logger.log('ioQuiz.write')
    const io = new x_0221_fmqa.io();

    convert(quizJson)

    quizJson.audience = io.getSysId('x_0221_fmqa_audience', 'name', quizJson.audience)

    const [day, month, year] = quizJson.date.split('-')
    quizJson.date = `${year}-${month}-${day}`

    const quizSysId = io.insertRecord('x_0221_fmqa_quiz', quizJson, ['name', 'number', 'audience', 'date'])

    const ioRound = new x_0221_fmqa.ioRound();
    quizJson.rounds.forEach((roundJson, roundIndex) => {
      const roundSysId = ioRound.write(roundJson, { quizSysId, roundIndex })

    //   if (!Array.isArray(roundJson.questions)) return roundJson;

    //   roundJson.questions.forEach((questionJson, questionIndex) => {
    //     const questionSysId = ioQuestion.write(questionJson, { roundSysId, questionIndex })
    //   })
    })

    return quizSysId;
  },

  getRounds(quizSysId) {
    this.logger.log('getRounds')
    const ioRound = new x_0221_fmqa.ioRound();
    const roundJsonList = [];
    const grQuizRound = new GlideRecord('x_0221_fmqa_quiz_round');
    grQuizRound.addQuery('quiz', quizSysId);
    grQuizRound.orderBy('number');
    grQuizRound.query();

    while (grQuizRound.next()) {
      const grRound = grQuizRound.round.getRefRecord();
      const roundJson = ioRound.read(grRound);
      roundJsonList.push(roundJson);
    }

    return roundJsonList;
  },
  type: 'ioQuiz'
};


function convert(quizJson) {
  const version = quizJson.$jsonversion || 1
  if (version >= 2) return quizJson

  return {
    ...quizJson,
    $jsonversion: 2,
    rounds: quizJson.rounds.map((roundJson) => {
      if (!Array.isArray(roundJson.questions)) return roundJson

      return {
        ...roundJson,
        questions: roundJson.questions.map((questionJson) => {
          // const langProps = questionJson.type === 'normal' ? ['qa'] : ['p1', 'p2', 'p3', 'p4']

          if (questionJson.type === 'normal') {
            questionJson.qa = {
              nl: {
                question: questionJson.textNl,
                answer: questionJson.answerNl,
              },
            }
          } else if (questionJson.type === '1234') {
            ['p1', 'p2', 'p3', 'p4'].map((p) => {
              questionJson[p] = {
                nl: {
                  question: questionJson[p].question,
                  answer: questionJson[p].answer,
                },
              }
            })
          }
        }),
      }
    }),
  }
}