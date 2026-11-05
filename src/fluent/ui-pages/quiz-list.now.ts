import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import quizListPage from '../../client/pages/quizList/index.html'

UiPage({
    $id: Now.ID['quiz-list'],
    endpoint: 'x_0221_fmqa_quiz_list.do',
    description: 'QuizList UI Page',
    category: 'general',
    html: quizListPage,
    direct: true,
})
