declare global {
    interface Window {
        g_ck: string
    }
}

export interface CategoryRecord {
    sys_id: string
    name: string
    color: string
}

export interface QuestionRecord {
    sys_id: string
    question: { display_value: string; value: string }
    answer: { display_value: string; value: string }
    difficulty: { display_value: string; value: string }
    category: { display_value: string; value: string }
    qa: { display_value: string; value: string }
    'qa.question': { display_value: string; value: string }
    'qa.answer': { display_value: string; value: string }
}

async function fetchTable(table: string, params: URLSearchParams): Promise<any[]> {
    const response = await fetch(
        `/api/now/table/${table}?${params.toString()}`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'X-UserToken': window.g_ck,
            },
        }
    )
    const { result } = await response.json()
    return result || []
}

export async function fetchCategories(): Promise<CategoryRecord[]> {
    const params = new URLSearchParams()
    params.set('sysparm_fields', 'sys_id,name,color')
    params.set('sysparm_limit', '200')
    params.set('sysparm_query', 'ORDERBYname')
    return fetchTable('x_0221_fmqa_category', params)
}

export async function searchQuestions(
    searchText: string,
    categoryIds: string[],
    difficultyValues: string[]
): Promise<QuestionRecord[]> {
    let encodedQuery = 'type=normal'

    if (searchText.trim()) {
        // First, search QA records matching the text
        const qaParams = new URLSearchParams()
        qaParams.set('sysparm_fields', 'sys_id')
        qaParams.set('sysparm_limit', '500')
        qaParams.set(
            'sysparm_query',
            `questionLIKE${searchText}^ORanswerLIKE${searchText}`
        )
        const qaResults = await fetchTable('x_0221_fmqa_qa', qaParams)

        if (qaResults.length === 0) {
            return []
        }

        const qaIds = qaResults.map((r: any) => r.sys_id)
        encodedQuery += `^qaIN${qaIds.join(',')}`
    }

    if (categoryIds.length > 0) {
        encodedQuery += `^categoryIN${categoryIds.join(',')}`
    }

    if (difficultyValues.length > 0) {
        encodedQuery += `^difficultyIN${difficultyValues.join(',')}`
    }

    const params = new URLSearchParams()
    params.set('sysparm_display_value', 'all')
    params.set(
        'sysparm_fields',
        'sys_id,question,answer,difficulty,category,qa,qa.question,qa.answer'
    )
    params.set('sysparm_limit', '200')
    params.set('sysparm_query', encodedQuery)

    return fetchTable('x_0221_fmqa_question', params)
}
