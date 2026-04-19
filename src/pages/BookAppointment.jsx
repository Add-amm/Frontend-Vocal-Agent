import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BookAppointment() {
  const [step, setStep] = useState(0)
  const [listening, setListening] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex-grow flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl font-extrabold tracking-tight text-on-surface">Good Morning, User</h2>
          <p className="text-xl text-on-surface-variant font-light">How can I assist you today?</p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <button className="group relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary-container rounded-full animate-ping opacity-20 scale-150"></div>
            <div className="absolute inset-0 bg-secondary-container rounded-full opacity-30 scale-125 blur-xl"></div>
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-primary to-primary-dim flex flex-col items-center justify-center text-on-primary voice-orb-glow transition-transform duration-500 group-hover:scale-105 group-active:scale-95">
              <span className="material-symbols-outlined text-5xl mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
            </div>
          </button>
          <button className="bg-primary text-on-primary px-10 py-5 rounded-3xl text-xl font-semibold hover:bg-on-surface transition-all duration-300 shadow-sm">
                            Talk to Assistant
          </button>
          <p className="text-sm text-outline-variant font-medium tracking-widest uppercase">or press spacebar to start</p>
        </div>
      </div>
    </div>
  )
}
