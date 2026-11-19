import React from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <Overview />
        </React.StrictMode>
    )
}

function Overview(){
    return (<>Overview</>)
}