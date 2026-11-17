import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import questionSearchPage from '../../client/pages/questionSearch/index.html'

UiPage({
    $id: Now.ID['question-search'],
    endpoint: 'x_0221_fmqa_ws_question_search.do',
    description: 'Question Search UI Page',
    category: 'general',
    html: questionSearchPage,
    direct: true,
})
