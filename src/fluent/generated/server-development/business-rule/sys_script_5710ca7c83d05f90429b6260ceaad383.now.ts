import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['5710ca7c83d05f90429b6260ceaad383'],
    name: 'Auto fill quiz number - display',
    table: 'x_0221_fmqa_quiz',
    when: 'display',
    action: ['insert'],
    filterCondition: 'numberISEMPTY^EQ',
    script: Now.include('./sys_script_5710ca7c83d05f90429b6260ceaad383.server.js'),
})
