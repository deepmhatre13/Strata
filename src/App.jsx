
import { Routes, Route } from 'react-router-dom'
import { TopNav } from './components/layout/TopNav'
import { AppHeader } from './components/layout/AppHeader'
import { NavTabs } from './components/layout/NavTabs'
import { Dashboard } from './components/sections/Dashboard'
import { TopicMastery } from './components/sections/TopicMastery'
import { AttemptHistory } from './components/sections/AttemptHistory'
import { Recommendations } from './components/sections/Recommendations'
import { Settings } from './components/sections/Settings'
import { LandingPage } from './components/sections/LandingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/dashboard"
        element={
          <div className="min-h-screen bg-[#FAF8F5] text-[#2D3436]">
            <TopNav />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-8">
              <AppHeader />
              <NavTabs />
              <section className="mt-6 space-y-10">
                <Dashboard />
                <TopicMastery />
                <AttemptHistory />
                <Recommendations />
                <Settings />
              </section>
            </main>
          </div>
        }
      />
    </Routes>
  )
}

export default App
