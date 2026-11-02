import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['4c2f4e7583d497d0429b6260ceaad3d1'],
    name: 'ioRound',
    script: Now.include('./sys_script_include_4c2f4e7583d497d0429b6260ceaad3d1.server.js'),
    apiName: 'x_0221_fmqa.ioRound',
    clientCallable: false,
    mobileCallable: false,
    active: true,
    protectionPolicy: 'read',
})
