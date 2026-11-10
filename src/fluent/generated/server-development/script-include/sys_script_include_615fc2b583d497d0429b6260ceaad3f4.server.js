// @ts-nocheck
var ioQuestion = Class.create();
ioQuestion.prototype = {
  initialize: function () {
    this.logger = new x_0221_fmqa.logger();
    this.logger.log('ioQuestion.initialize')
  },

  read: function (grQuestion) {
    this.logger.log('read')
    const io = new x_0221_fmqa.io();
    const questionJson = io.getJsonFromGlideRecord(grQuestion, [
      'sys_id',
      'type',
      'filename',
      { fieldName: 'difficulty', type: 'number' },
      { fieldName: 'media_type', key: 'mediaType' },
      { fieldName: 'category', type: 'display' },
      { fieldName: 'fullscreen', type: 'boolean' },
    ])

    if (questionJson.type === 'normal') {
      questionJson.qa = {
        nl: {
          question: grQuestion.qa.question.toString(),
          answer: grQuestion.qa.answer.toString(),
        }
      }
    } else if (questionJson.type === '1234') {
      ['p1', 'p2', 'p3', 'p4'].forEach(p => {
        questionJson[p] = {
          nl: {
            question: grQuestion[p].question,
            answer: grQuestion[p].answer,
          }
        }
      })
    }

    return questionJson;
  },

  write: function (questionJson, {
    roundSysId = null,
    questionIndex
  }) {
    this.logger.log('write')
    gs.info('wrrote')
    const io = new x_0221_fmqa.io();

    questionJson.category = io.getSysId('x_0221_fmqa_category', 'name', questionJson.category);
    questionJson.filename = `${questionJson.mediaPath}/${questionJson.media}`;
    questionJson.media_type = questionJson.mediaType;

    
    switch (questionJson.type) {
      case '1234':
        ['p1', 'p2', 'p3', 'p4'].forEach((p) => {
          const qaSysId = this.insertQA(questionJson[p])
          questionJson[p] = qaSysId
        })
        break;
      case 'normal':
        const qaSysId = this.insertQA(questionJson.qa)
        questionJson.qa = qaSysId
        break;
      default:
        throw new Error('invalid question type')
    }

    const questionSysId = io.insertRecord('x_0221_fmqa_question', questionJson)
    if (typeof roundSysId === 'string') {
      io.insertRecord('x_0221_fmqa_round_question', {
        round: roundSysId,
        question: questionSysId,
        number: questionIndex + 1,
      })
    }

    return questionSysId;
  },

  insertQA: function (languagueObject = {}) {
    this.logger.log('insertQA')
    const io = new x_0221_fmqa.io();
    const language = 'nl'
    const { question, answer } = languagueObject[language]

    return io.insertRecord('x_0221_fmqa_qa', {
      question,
      answer,
      language,
    })
  }
}

