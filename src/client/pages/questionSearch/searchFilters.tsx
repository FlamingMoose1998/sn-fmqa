import React from 'react'
import { Input } from '@servicenow/react-components/Input'
import { Button } from '@servicenow/react-components/Button'
import {
    TypeaheadMulti,
} from '@servicenow/react-components/TypeaheadMulti'

interface FilterItem {
    id: string
    label: string
}

interface SearchFiltersProps {
    searchText: string
    onSearchTextChange: (value: string) => void
    onSearch: () => void
    categoryItems: FilterItem[]
    selectedCategories: FilterItem[]
    onSelectedCategoriesChange: (items: FilterItem[]) => void
    difficultyItems: FilterItem[]
    selectedDifficulties: FilterItem[]
    onSelectedDifficultiesChange: (items: FilterItem[]) => void
}

export default function SearchFilters({
    searchText,
    onSearchTextChange,
    onSearch,
    categoryItems,
    selectedCategories,
    onSelectedCategoriesChange,
    difficultyItems,
    selectedDifficulties,
    onSelectedDifficultiesChange,
}: SearchFiltersProps) {
    return (
        <div className="search-filters">
            <div className="search-bar">
                <div className="search-input-wrapper">
                    <Input
                        label="Search"
                        type="text"
                        placeholder="Search questions and answers..."
                        value={searchText}
                        manageValue
                        onValueSet={(e: any) =>
                            onSearchTextChange(e.detail.payload.value)
                        }
                        onEnterKeydown={onSearch}
                    />
                </div>
                <div className="search-button-wrapper">
                    <Button
                        label="Search"
                        variant="primary"
                        icon="magnifying-glass-fill"
                        onClicked={onSearch}
                    />
                </div>
            </div>
            <div className="filter-bar">
                <div className="filter-item">
                    <TypeaheadMulti
                        label="Categories"
                        items={categoryItems}
                        selectedItems={selectedCategories}
                        search="contains"
                        placeholder="Filter by category..."
                        disableAutoClose
                        onSelectedItemsSet={(e: any) =>
                            onSelectedCategoriesChange(e.detail.payload.value)
                        }
                    />
                </div>
                <div className="filter-item">
                    <TypeaheadMulti
                        label="Difficulty"
                        items={difficultyItems}
                        selectedItems={selectedDifficulties}
                        search="contains"
                        placeholder="Filter by difficulty..."
                        disableAutoClose
                        onSelectedItemsSet={(e: any) =>
                            onSelectedDifficultiesChange(e.detail.payload.value)
                        }
                    />
                </div>
            </div>
        </div>
    )
}
