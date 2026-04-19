import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // simulate login
    navigate('/appointments')
  }

  const handleDemoFill = () => {
    setEmail('demo@medplus.com')
    setPassword('demo1234')
  }

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full glass-orb pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full glass-orb pointer-events-none" />

      <main className="w-full max-w-md px-6 relative z-20">
        <div className="bg-surface-container-lowest rounded-xl soft-elevation p-8 flex flex-col gap-8">

          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight leading-tight font-headline">
              Welcome Back
            </h1>
            <p className="text-on-surface-variant font-medium opacity-70">
              Experience your clinical sanctuary
            </p>
          </div>

          {/* Tabs */}
          <div className="bg-surface-container-low p-1.5 rounded-full flex items-center">
            <button className="flex-1 py-2.5 rounded-full text-sm font-bold bg-surface-container-highest text-primary">
              Login
            </button>
            <Link
              to="/signup"
              className="flex-1 py-2.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all text-center"
            >
              Sign Up
            </Link>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
                    mail
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low rounded-full py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                    placeholder="name@medplus.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4">
                  Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant text-xl">
                    lock
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-low rounded-full py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 space-y-3">

              {/* Demo Button */}
              <button
                type="button"
                onClick={handleDemoFill}
                className="w-full bg-surface-container-high text-on-surface font-semibold py-4 rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-surface-container-highest transition-all border border-surface-container-highest"
              >
                <div className="flex items-center gap-2">
                  <span>Use Demo Account</span>
                </div>

                {/* Extra info */}
                <span className="text-xs text-on-surface-variant opacity-70">
                  demo@medplus.com • demo1234
                </span>
              </button>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Sign In
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-full h-[1px] bg-surface-container-highest" />
            <span className="relative bg-surface-container-lowest px-4 text-xs font-bold uppercase tracking-widest text-outline-variant">
              OR CONTINUE WITH
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-semibold text-on-surface">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.19 1.28-2.17 3.81.02 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sm font-semibold text-on-surface">Apple</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-on-surface-variant text-sm font-medium">
          Need clinical assistance?{' '}
          <a href="#" className="text-primary font-bold hover:underline">
            Contact Support
          </a>
        </p>
      </main>

      {/* Background */}
      <div className="fixed bottom-0 left-0 w-full h-1/4 opacity-10 bg-gradient-to-t from-surface-container-highest to-transparent" />
    </div>
  )
}
