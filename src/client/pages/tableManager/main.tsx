import React from 'react'
import ReactDOM from 'react-dom/client'
import DataManager from '../../components/DataManager/DataManager'

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <DataManager />
        </React.StrictMode>
    )
}
