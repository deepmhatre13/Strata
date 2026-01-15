import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'topics', label: 'Topic mastery' },
  { id: 'attempts', label: 'Attempt history' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'settings', label: 'Settings' },
]

export function NavTabs() {
  const location = useLocation()
  const navigate = useNavigate()
  
  // Get active tab from URL hash or default to dashboard
  const activeTab = location.hash.slice(1) || 'dashboard'

  const handleTabClick = (tabId) => {
    navigate(`/dashboard#${tabId}`, { replace: true })
  }

  return (
    <nav className="border-b border-[#F4E0D5]">
      <div className="flex gap-6 text-sm text-[#7A7068]">
        {tabs.map(tab => {
          const isActive = tab.id === activeTab

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabClick(tab.id)}
              className={
                'relative py-3 border-b-2 -mb-px whitespace-nowrap transition-colors ' +
                (isActive
                  ? 'border-[#E17B5F] text-[#2D3436] font-medium'
                  : 'border-transparent text-[#A8A29E] hover:text-[#2D3436]')
              }
            >
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-[#E17B5F] rounded-full" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

