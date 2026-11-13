import React from 'react'
import TableRow from './tableRow'
import './app.css'

const TABLES = [
    { label: 'Quiz', table: 'x_0221_fmqa_quiz' },
    { label: 'Round', table: 'x_0221_fmqa_round' },
    { label: 'Question', table: 'x_0221_fmqa_question' },
    { label: 'Category', table: 'x_0221_fmqa_category' },
    { label: 'Audience', table: 'x_0221_fmqa_audience' },
    { label: 'Raw JSON', table: 'x_0221_fmqa_raw_json' },
    { label: 'QA', table: 'x_0221_fmqa_qa' },
    { label: 'Quiz Round', table: 'x_0221_fmqa_quiz_round' },
    { label: 'Round Question', table: 'x_0221_fmqa_round_question' },
]

export default function App() {
    return (
        <div className="tm-container">
            <h1 className="tm-heading">Table Manager</h1>
            <table className="tm-table">
                <thead>
                    <tr>
                        <th className="tm-th">Table</th>
                        <th className="tm-th tm-center">Records</th>
                        <th className="tm-th tm-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {TABLES.map((t) => (
                        <TableRow key={t.table} label={t.label} table={t.table} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
