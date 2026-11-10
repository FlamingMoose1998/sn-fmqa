var DataTools = Class.create();
DataTools.prototype = {
  deleteAllRecords: function () {
    const exempt = [
      'x_0221_fmqa_imp_quiz',
      'x_0221_fmqa_raw_json',
      'x_0221_fmqa_category',
      'x_0221_fmqa_audience',
    ];
    const tableNames = getTableNames(exempt);

    tableNames.forEach(tableName => {
      const gr = new GlideRecord(tableName);
      gr.deleteMultiple();
    })
  },
}


function getTableNames(exempt = []) {
  const grTable = new GlideRecord('sys_db_object');
  const fmqaScope = '5fdf85b4835c1f90429b6260ceaad33b';  
  grTable.addQuery('sys_scope', fmqaScope);

  if (exempt.length > 0){
    grTable.addQuery('name', 'NOT IN', exempt);
  }
  
  grTable.query();

  const tableNames = [];
  while (grTable.next()) {
    tableNames.push(grTable.getValue('name'))
  }

  return tableNames;
}