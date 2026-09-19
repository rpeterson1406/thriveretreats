import TucsonRetreatPage from './pages/TucsonRetreatPage'

/**
 * Root app shell. "/" and "/Tucson" both render the existing Tucson retreat page.
 * A future homepage can replace the "/" branch without touching Tucson content.
 */
function App() {
  return <TucsonRetreatPage />
}

export default App
