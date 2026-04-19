import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShieldAlert } from 'lucide-react'

const navItems = [
  { to: '/book', icon: 'record_voice_over', label: 'Take Appointment' },
  { to: '/appointments', icon: 'history', label: 'History & Management' },
]

const bottomItems = [
  { to: '/settings', icon: 'settings', label: 'Profile Settings' },
]

export default function Sidebar() {
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-sm font-medium font-headline ${
      isActive
        ? 'text-primary font-bold border-r-4 border-primary bg-surface-container-highest'
        : 'text-on-background opacity-80 hover:bg-surface-container-highest'
    }`

  const handleLogout = () => {
    setShowLogout(false)
    navigate('/login')
  }

  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col p-6 space-y-8 bg-surface-container-low w-72 z-50">

      {/* Brand */}
      <div className="flex items-center space-x-4 px-2">
        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center overflow-hidden flex-shrink-0">
          <span className="material-symbols-outlined text-on-primary text-2xl">
            local_hospital
          </span>
        </div>
        <h2 className="text-lg font-bold text-on-surface font-headline">
          Medical Plus
        </h2>
      </div>

      {/* Main Nav */}
      <div className="flex-1 space-y-2">
        {navItems.map(({ to, icon, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="space-y-2">
        {bottomItems.map(({ to, icon, label }) => (
          <NavLink key={to} to={to} className={linkClass}>
            <span className="material-symbols-outlined">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => setShowLogout(true)}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all text-on-background opacity-80 hover:bg-surface-container-highest text-sm font-medium font-headline"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Sign Out</span>
        </button>

        {/* Logout Modal */}
        {showLogout && (
          <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 w-full max-w-sm mx-4 shadow-2xl space-y-4">

              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                <ShieldAlert className="w-6 h-6 text-red-600" />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Confirm Logout
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Are you sure you want to logout?
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogout(false)}
                  className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-900 hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>

                <button
                  onClick={handleLogout}
                  className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-colors text-sm font-medium"
                >
                  Logout
                </button>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
