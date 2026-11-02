var ioRound = Class.create();
ioRound.prototype = {
  initialize: function () {
    this.logger = new x_0221_fmqa.logger();
    this.logger.log('ioRound.init')

  },

  read: function (grRound) {
    const io = new x_0221_fmqa.io();
    const roundJson = io.getJsonFromGlideRecord(grRound, [
      'sys_id',
      'theme',
      'type'
    ])

    const questions = this.getQuestions(roundJson.sys_id);
    if (questions.length > 0) {
      roundJson.questions = questions;
    }

    return roundJson;
  },

  getQuestions(roundSysId) {
    const ioQuestion = new x_0221_fmqa.ioQuestion();
    const questionJsonList = [];
    const grRoundQuestion = new GlideRecord('x_0221_fmqa_round_question');
    grRoundQuestion.addQuery('round', roundSysId);
    grRoundQuestion.orderBy('number');
    grRoundQuestion.query();

    while (grRoundQuestion.next()) {
      const grQuestion = grRoundQuestion.question.getRefRecord();
      const questionJson = ioQuestion.read(grQuestion);
      questionJsonList.push(questionJson);
    }

    return questionJsonList;
  },

  /**
   * Writes a round and its components to the database
   * If the quizSysId is provided the round is linked to that quiz
   * @param {Round} roundJson
   * @param {Object} options
   * @param {string|null} options.quizSysId
   * @param {number|null} options.roundIndex
   * @returns {string} roundSysId
   */
  write: function (roundJson, { quizSysId = null, roundIndex = null }) {
    const io = new x_0221_fmqa.io();
    const roundSysId = io.insertRecord('x_0221_fmqa_round', roundJson, ['name', 'number', 'type', 'theme'])

    if (typeof quizSysId === null || roundIndex === null) {
      return roundSysId
    }

    io.insertRecord('x_0221_fmqa_quiz_round', {
      quiz: quizSysId,
      round: roundSysId,
      number: roundIndex + 1,
    })

    if (!Array.isArray(roundJson.questions)) return roundJson;

    const ioQuestion = new x_0221_fmqa.ioQuestion();
    roundJson.questions.forEach((questionJson, questionIndex) => {
      const questionSysId = ioQuestion.write(questionJson, { roundSysId, questionIndex })
    })

    return roundSysId;
  },
}
