import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['30ee067583d497d0429b6260ceaad321'],
    name: 'ioQuiz',
    script: Now.include('./sys_script_include_30ee067583d497d0429b6260ceaad321.server.js'),
    apiName: 'x_0221_fmqa.ioQuiz',
    clientCallable: false,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
