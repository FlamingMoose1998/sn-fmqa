import React from 'react'
import { HighlightedValue } from '@servicenow/react-components/HighlightedValue'
import type { QuestionRecord } from './api'

interface ResultTableProps {
    questions: QuestionRecord[]
    loading: boolean
}

type HighlightedColor = 'critical' | 'high' | 'warning' | 'moderate' | 'positive' | 'info' | 'low' | 'magenta' | 'pink' | 'orange' | 'yellow' | 'brown' | 'green' | 'green-yellow' | 'blue' | 'gray' | 'teal' | 'purple'

function getDifficultyColor(value: string): HighlightedColor {
    switch (value) {
        case '1':
            return 'green'
        case '2':
            return 'orange'
        case '3':
            return 'pink'
        default:
            return 'gray'
    }
}

export default function ResultTable({ questions, loading }: ResultTableProps) {
    if (loading) {
        return null
    }

    if (questions.length === 0) {
        return (
            <div className="no-results">
                No results found
            </div>
        )
    }

    return (
        <table className="result-table">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                {questions.map((q) => (
                    <tr key={q.sys_id}>
                        <td>
                            {q['qa.question']?.display_value || q.question?.display_value || ''}
                        </td>
                        <td>
                            {q['qa.answer']?.display_value || q.answer?.display_value || ''}
                        </td>
                        <td>{q.category?.display_value || ''}</td>
                        <td>
                            {q.difficulty?.value ? (
                                <HighlightedValue
                                    label={q.difficulty.display_value}
                                    color={getDifficultyColor(q.difficulty.value)}
                                    variant="secondary"
                                    size="sm"
                                />
                            ) : (
                                ''
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
