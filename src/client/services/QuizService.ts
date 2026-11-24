import { TableService } from "./TableService.js";

export async function getQuestions(query: string){
  const ts = new TableService('x_0221_fmqa_question')
  const options = {
    sysparm_query: query,
    sysparm_fields: 'sys_id,qa.question,qa.answer,difficulty,category',
    sysparm_exclude_reference_link: 'true',
    sysparm_display_value: 'all',
  }
  const questionList = await ts.list(options)

  return questionList;
}
export async function getCategories(){
  const ts = new TableService('x_0221_fmqa_category')
  const options = {
    sysparm_query: 'label!=NULL',
    sysparm_fields: 'sys_id,name,label',
  }
  const categoryList = await ts.list(options);

  return categoryList;
}