import { TableService } from "./TableService.js";

interface SearchState {
  text: string,
}

export async function getQuestions(searchState: SearchState){
  const {
    text
  } = searchState;


  let query = ''
  if (text){
    query += `qa.questionCONTAINS${text}^ORqa.answerCONTAINS${text}`;
  }

  const ts = new TableService('x_0221_fmqa_question')
  const options = {
    sysparm_query: query,
    sysparm_fields: 'sys_id,qa.question,qa.answer,difficulty,category',
    sysparm_exclude_reference_link: 'true',
    sysparm_display_value: 'all',
  }
  console.log('options', options)
  const list = await ts.list(options)

  console.log('list', list)
  return list;
}