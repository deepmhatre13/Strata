
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { TopNav } from './components/layout/TopNav'
import { AppHeader } from './components/layout/AppHeader'
import { NavTabs } from './components/layout/NavTabs'
import { Dashboard } from './components/sections/Dashboard'
import { TopicMastery } from './components/sections/TopicMastery'
import { AttemptHistory } from './components/sections/AttemptHistory'
import { Recommendations } from './components/sections/Recommendations'
import { Settings } from './components/sections/Settings'
import { LandingPage } from './components/sections/LandingPage'

function DashboardLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const activeTab = location.hash.slice(1) || 'dashboard'

  // Set default hash if missing
  useEffect(() => {
    if (!location.hash) {
      navigate('/dashboard#dashboard', { replace: true })
    }
  }, [location.hash, navigate])

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D3436]">
      <TopNav />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-8">
        <AppHeader />
        <NavTabs />
        <section className="mt-6">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'topics' && <TopicMastery />}
          {activeTab === 'attempts' && <AttemptHistory />}
          {activeTab === 'recommendations' && <Recommendations />}
          {activeTab === 'settings' && <Settings />}
        </section>
      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  )
}

export default App
