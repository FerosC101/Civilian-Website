import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css' // Add this line back

// Same App component as above...
const App = () => {
    return React.createElement('div', {
        style: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            fontFamily: 'Arial, sans-serif'
        }
    }, [
        React.createElement('h1', {
            key: 'title',
            style: { color: '#0ea5e9', fontSize: '3rem', marginBottom: '1rem' }
        }, 'CIVILIAN'),
        React.createElement('p', {
            key: 'subtitle',
            style: { color: '#cbd5e1', fontSize: '1.2rem' }
        }, 'CSS Import Working!')
    ])
}

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')

const root = createRoot(container)
root.render(React.createElement(App))