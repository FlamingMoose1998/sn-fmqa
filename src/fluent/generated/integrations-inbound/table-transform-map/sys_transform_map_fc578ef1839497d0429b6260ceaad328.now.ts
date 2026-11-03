import { ImportSet } from '@servicenow/sdk/core'

ImportSet({
    $id: Now.ID['fc578ef1839497d0429b6260ceaad328'],
    name: 'Map Quiz',
    targetTable: 'x_0221_fmqa_quiz',
    sourceTable: 'x_0221_fmqa_imp_quiz',
    active: true,
    runBusinessRules: true,
    fields: {
        date: {
            sourceField: 'u_date',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd',
        },
        description: {
            sourceField: 'u_number_old',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
        name: {
            sourceField: 'u_name',
            choiceAction: 'create',
            sourceScript: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
            dateFormat: 'yyyy-MM-dd HH:mm:ss',
        },
    },
    runScript: false,
})
