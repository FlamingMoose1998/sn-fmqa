import { DataPolicy } from '@servicenow/sdk/core'

DataPolicy({
    $id: Now.ID['62f4275883a01310429b6260ceaad3ed'],
    table: 'x_0221_fmqa_question',
    shortDescription: 'Show fields based on question type',
    active: false,
    conditions: 'type=1234^EQ',
})
