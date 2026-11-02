import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['970702b1839497d0429b6260ceaad312'],
    name: 'Auto fill quiz number - insert',
    table: 'x_0221_fmqa_quiz',
    when: 'before',
    action: ['insert'],
    filterCondition: 'numberISEMPTY^EQ',
    script: Now.include('./sys_script_970702b1839497d0429b6260ceaad312.server.js'),
})
