import { useState } from 'react'

function PasswordModal({ onClose }) {
  const [form, setForm] = useState({ current: '', next: '', confirm: '' })
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = () => {
    if (!form.current || !form.next || !form.confirm) {
      setError('Please fill in all fields.')
      return
    }
    if (form.next !== form.confirm) {
      setError('New passwords do not match.')
      return
    }
    if (form.next.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    setDone(true)
    setTimeout(onClose, 1500)
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/30 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal card */}
      <div className="w-full max-w-md mx-4 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0_24px_64px_rgba(47,52,48,0.14)] flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">lock_reset</span>
            <h2 className="text-xl font-bold font-headline text-on-surface">Update Password</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        {done ? (
          /* Success state */
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl text-secondary">check_circle</span>
            </div>
            <p className="font-bold text-on-surface font-headline">Password updated!</p>
            <p className="text-sm text-on-surface-variant text-center">Your password has been changed successfully.</p>
          </div>
        ) : (
          <>
            {/* Fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-on-surface-variant ml-2">Current Password</label>
                <input
                  name="current"
                  type="password"
                  value={form.current}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-3.5 text-on-surface placeholder:text-outline-variant transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-on-surface-variant ml-2">New Password</label>
                <input
                  name="next"
                  type="password"
                  value={form.next}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-3.5 text-on-surface placeholder:text-outline-variant transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-on-surface-variant ml-2">Confirm New Password</label>
                <input
                  name="confirm"
                  type="password"
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-3.5 text-on-surface placeholder:text-outline-variant transition-all"
                />
              </div>

              {error && (
                <p className="text-sm font-medium text-error ml-2">{error}</p>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="text-primary font-semibold text-sm px-6 py-3 rounded-full hover:bg-surface-container-highest transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
              >
                Update Password
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function Settings() {
  const [twoFA, setTwoFA] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="bg-surface min-h-screen">
      {showPasswordModal && <PasswordModal onClose={() => setShowPasswordModal(false)} />}

      <main className="pt-10 px-10 pb-20 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline mb-2">Account Sanctuary</h1>
          <p className="text-on-surface-variant">Refine your personal details and digital presence within Serene Health.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Profile Picture Card */}
          <section className="lg:col-span-4 bg-surface-container-low rounded-[2rem] p-8 flex flex-col items-center text-center">
            <div className="relative group mb-2">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-surface-container-high relative mb-6 ring-4 ring-surface ring-offset-4 ring-offset-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-7xl text-outline-variant">person</span>
              </div>
              <button className="absolute bottom-6 right-0 bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            <h3 className="text-xl font-bold font-headline text-on-surface">Elena Rodriguez</h3>
            <p className="text-sm text-on-surface-variant mb-6">Patient since October 2023</p>
            <div className="w-full space-y-3">
              <div className="bg-surface-container-lowest p-4 rounded-2xl flex items-center justify-between">
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest">Health ID</span>
                <span className="text-sm font-bold text-primary font-headline">#SRN-49201</span>
              </div>
            </div>
          </section>

          {/* Settings Form */}
          <section className="lg:col-span-8 space-y-8">
            {/* Personal Information */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">person</span>
                <h2 className="text-2xl font-bold font-headline">Personal Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Elena Rodriguez"
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-4 text-on-surface transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="elena.rodriguez@example.com"
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-4 text-on-surface transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-2">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 0123-4567"
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-4 text-on-surface transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-2">Preferred Language</label>
                  <select className="w-full bg-surface-container-lowest border-none ring-1 ring-primary/10 focus:ring-2 focus:ring-primary rounded-full px-6 py-4 text-on-surface transition-all appearance-none">
                    <option>English (United States)</option>
                    <option>Spanish (Castilian)</option>
                    <option>French (Standard)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary">shield</span>
                <h2 className="text-2xl font-bold font-headline">Security &amp; Privacy</h2>
              </div>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-2xl">
                  <div>
                    <h4 className="font-bold text-on-surface">Account Password</h4>
                  </div>
                  <button
                    onClick={() => setShowPasswordModal(true)}
                    className="bg-surface-container-highest text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-primary-fixed transition-colors"
                  >
                    Update Password
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 bg-surface-container-lowest rounded-2xl">
                  <div>
                    <h4 className="font-bold text-on-surface">Two-Factor Authentication</h4>
                    <p className="text-sm text-on-surface-variant">Enhanced security for your health records</p>
                  </div>
                  <button
                    onClick={() => setTwoFA(!twoFA)}
                    className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${twoFA ? 'bg-primary' : 'bg-outline-variant'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${twoFA ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-end gap-4 pt-4">
              <button className="text-primary font-semibold text-sm px-8 py-4 rounded-full hover:bg-surface-container-highest transition-colors">
                Discard Changes
              </button>
              <button
                onClick={handleSave}
                className="bg-primary text-on-primary font-bold px-12 py-4 rounded-full flex items-center gap-3 shadow-sm hover:opacity-90 active:scale-95 transition-all"
              >
                {saved ? 'Saved!' : 'Save Preferences'}
                <span className="material-symbols-outlined text-lg">{saved ? 'check' : 'check_circle'}</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}