import { useNavigate, Link } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/appointments')
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-64 -mt-32 blur-3xl pointer-events-none bg-surface-container-highest/40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -ml-32 -mb-16 blur-3xl pointer-events-none bg-secondary-container/20" />

      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-24 relative z-10">
        <div className="w-full max-w-xl">

          {/* Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-[0_20px_40px_rgba(47,52,48,0.06)] border border-outline-variant/15">
            <div className="mb-8">
              <h2 className="font-headline text-2xl font-bold text-on-surface">Create Account</h2>
              <p className="text-on-surface-variant font-body text-sm mt-1">Please provide your details to register with the clinic.</p>
            </div>

            {/* Tabs */}
            <div className="bg-surface-container-low p-1.5 rounded-full flex items-center mb-6">
              <Link to="/login" className="flex-1 py-2.5 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all text-center">
                Login
              </Link>
              <button className="flex-1 py-2.5 rounded-full text-sm font-bold bg-surface-container-highest text-primary transition-all">
                Sign Up
              </button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="full_name">Full Name</label>
                <input
                  id="full_name"
                  type="text"
                  placeholder="Evelyn Harper"
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="evelyn@example.com"
                    className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="confirm_password">Confirm Password</label>
                <input
                  id="confirm_password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dim text-on-primary font-headline font-bold py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary/10"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
