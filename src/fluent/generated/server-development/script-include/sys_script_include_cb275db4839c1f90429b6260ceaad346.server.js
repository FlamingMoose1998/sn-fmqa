var NumberGenerator = Class.create();
NumberGenerator.prototype = {
    initialize: function() {},

    getNextQuizNumber: function(){
        return getNextNumber('x_0221_fmqa_quiz');
    },

    type: 'NumberGenerator'
};


function getNextNumberold(table, prefix, { length = 6, field = 'number' } = {}){
    if (typeof table !== 'string') throw new Error('getNextNumber - Missing table')
    if (typeof prefix !== 'string') throw new Error('getNextNumber - Missing prefix')

    const gr = new GlideRecord(table);
    gr.orderByDesc(field);
    gr.setLimit(1);
    gr.query();

    const hasPrevious = gr.hasNext() && gr.next()

    const baseNumber = Math.pow(10, length)
    const baseString = baseNumber.toString()

    const lastNumberString = hasPrevious ? gr.getValue(field).slice(-length) : baseString.replace(/^10/, '13');
    const nextNumberString = (parseInt(lastNumberString, 10) + 1).toString();

    const numberValue = nextNumberString.replace(/^1/, prefix);

    return numberValue;
}


function getNextNumber(table){
   const grNumber = new GlideRecord('sys_number');
   if (!grNumber.get('category', table)) throw new Error('number not found')

   const prefix = grNumber.getValue('prefix');
   const length = grNumber.getValue('maximum_digits');
   const lastNumberString = grNumber.getValue('number');

   const nextNumber = parseInt(lastNumberString, 10) + 1;
   grNumber.setValue('number', nextNumber);
   grNumber.update();

   const base = Math.pow(10, length);
   const nextNumberString = (base + nextNumber)
      .toString()
      .replace(/^1/, prefix);
   
   return nextNumberString;
}