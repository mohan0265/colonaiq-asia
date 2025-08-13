import React, { useState } from 'react'
import { Page } from './lib/nav'

import HomePage from './pages/index'
import PatientsPage from './pages/patients'
import ClinicsAndLabsPage from './pages/clinics-and-labs'
import ClinicalEvidencePage from './pages/clinical-evidence'
import InvestorsPage from './pages/investors'
import ContactPage from './pages/contact'

import Header from './components/Header'
import Footer from './components/Footer'

// Relax typing so TS doesn’t complain if some pages don’t declare props explicitly
type AnyComponent = React.ComponentType<any>

const PAGES: Record<Page, AnyComponent> = {
  'home': HomePage,
  'patients': PatientsPage,
  'clinics-labs': ClinicsAndLabsPage,
  'clinical-evidence': ClinicalEvidencePage,
  'investors': InvestorsPage,
  'contact': ContactPage,
}

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const Current = PAGES[page]

  return (
    <>
      <Header current={page} onNavigate={setPage} />
      <main>
        <Current onNavigate={setPage} />
      </main>
      <Footer />
    </>
  )
}
