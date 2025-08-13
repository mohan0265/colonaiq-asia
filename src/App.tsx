import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/index'
import PatientsPage from './pages/patients'
import ClinicsLabsPage from './pages/clinics-and-labs'
import ClinicalEvidencePage from './pages/clinical-evidence'
import InvestorsPage from './pages/investors'
import ContactPage from './pages/contact'

type Page = 'home' | 'patients' | 'clinics-labs' | 'clinical-evidence' | 'investors' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'patients':
        return <PatientsPage onNavigate={setCurrentPage} />
      case 'clinics-labs':
        return <ClinicsLabsPage onNavigate={setCurrentPage} />
      case 'clinical-evidence':
        return <ClinicalEvidencePage onNavigate={setCurrentPage} />
      case 'investors':
        return <InvestorsPage onNavigate={setCurrentPage} />
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="App">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  )
}

export default App

