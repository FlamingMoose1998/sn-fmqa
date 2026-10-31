import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['738cfdf883d05f90429b6260ceaad39e'],
    name: 'Generate quiz number',
    table: 'x_0221_fmqa_quiz',
    when: 'before',
    action: ['insert'],
    filterCondition: 'numberISEMPTY^EQ',
    script: Now.include('./sys_script_738cfdf883d05f90429b6260ceaad39e.server.js'),
    active: false,
})
