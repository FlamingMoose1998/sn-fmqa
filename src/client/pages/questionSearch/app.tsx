import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Loader } from '@servicenow/react-components/Loader'
import SearchFilters from './searchFilters'
import ResultTable from './resultTable'
import {
    fetchCategories,
    searchQuestions,
    type CategoryRecord,
    type QuestionRecord,
} from './api'
import { getQuestions } from '../../services/QuizService'
import './app.css'

interface FilterItem {
    id: string
    label: string
}

const DIFFICULTY_ITEMS: FilterItem[] = [
    { id: '1', label: 'Easy' },
    { id: '2', label: 'Medium' },
    { id: '3', label: 'Hard' },
]

export default function App() {
    const [searchText, setSearchText] = useState('')
    const [categoryItems, setCategoryItems] = useState<FilterItem[]>([])
    const [selectedCategories, setSelectedCategories] = useState<FilterItem[]>([])
    const [selectedDifficulties, setSelectedDifficulties] = useState<FilterItem[]>([])
    const [questions, setQuestions] = useState<QuestionRecord[]>([])
    const [loading, setLoading] = useState(false)
    const [hasSearched, setHasSearched] = useState(false)

    const query = `qa.questionLIKE${searchText}^ORqa.answerLIKE${searchText}`

    const searchTextRef = useRef(searchText)
    searchTextRef.current = searchText

    // Load categories on mount
    useEffect(() => {
        fetchCategories().then((cats: CategoryRecord[]) => {
            setCategoryItems(
                cats.map((c) => ({ id: c.sys_id, label: c.name }))
            )
        })
    }, [])

    const doSearch = useCallback(
        async (
            text: string,
            cats: FilterItem[],
            diffs: FilterItem[]
        ) => {
            console.log('performing search', text, cats, diffs)
            setLoading(true)
            setHasSearched(true)
            try {
                const results = await getQuestions(query)
                console.log('results', results);
/*
                const results = await searchQuestions(
                    text,
                    cats.map((c) => c.id),
                    diffs.map((d) => d.id)
                )
*/
                setQuestions(results)
            } catch {
                setQuestions([])
            } finally {
                setLoading(false)
            }
        },
        []
    )

    const handleSearch = useCallback(() => {
        doSearch(searchTextRef.current, selectedCategories, selectedDifficulties)
    }, [doSearch, selectedCategories, selectedDifficulties])

    // Auto-search on filter change
    const handleCategoriesChange = useCallback(
        (items: FilterItem[]) => {
            setSelectedCategories(items)
            doSearch(searchTextRef.current, items, selectedDifficulties)
        },
        [doSearch, selectedDifficulties]
    )

    const handleDifficultiesChange = useCallback(
        (items: FilterItem[]) => {
            setSelectedDifficulties(items)
            doSearch(searchTextRef.current, selectedCategories, items)
        },
        [doSearch, selectedCategories]
    )

    return (
        <div className="question-search-app">
            <h1 className="page-title">Question Search</h1>
            <SearchFilters
                searchText={searchText}
                onSearchTextChange={setSearchText}
                onSearch={handleSearch}
                categoryItems={categoryItems}
                selectedCategories={selectedCategories}
                onSelectedCategoriesChange={handleCategoriesChange}
                difficultyItems={DIFFICULTY_ITEMS}
                selectedDifficulties={selectedDifficulties}
                onSelectedDifficultiesChange={handleDifficultiesChange}
            />
            {loading && (
                <div className="loader-wrapper">
                    <Loader label="Searching..." />
                </div>
            )}
            {hasSearched && !loading && (
                <div className="results-count">
                    {questions.length} result{questions.length !== 1 ? 's' : ''} found
                </div>
            )}
            {hasSearched && (
                <ResultTable questions={questions} loading={loading} />
            )}
        </div>
    )
}
