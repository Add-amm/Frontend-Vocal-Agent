import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const API_BASE = 'http://localhost:3000';

export default function SignUp() {
  const navigate = useNavigate()

  const [nom_complet, setNomComplet] = useState('');
  const [email, setEmail] = useState('');
  const [phone_num, setPhoneNum] = useState('');
  const [mdp, setMdp] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nom_complet || !email || !phone_num || !mdp || !confirm_password) {
      alert('Tous les champs sont nécessaires.');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nom_complet,
          email,
          phone_num,
          mdp,
          confirm_password 
        }),
      });

      const raw = await res.text();

      if (!res.ok) {
        let message = `Erreur serveur (${res.status})`;
        try {
          const parsed = JSON.parse(raw);
          message = parsed?.message || JSON.stringify(parsed) || message;
        } catch {
          if (raw) message = raw;
        }
        throw new Error(message);
      }

      setIsSignedUp(true);

      setTimeout(() => {
        setIsSignedUp(false);
        navigate('/login');
      }, 3000);

    } catch (err) {
      console.error('Erreur login:', err);
      alert(err.message || 'Erreur lors de la connexion');
    }
  }

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full -mr-64 -mt-32 blur-3xl pointer-events-none bg-surface-container-highest/40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full -ml-32 -mb-16 blur-3xl pointer-events-none bg-secondary-container/20" />

      <main className="flex-grow flex items-center justify-center px-6 py-12 md:py-24 relative z-10">
        <div className="w-full max-w-xl">

          {/* Card */}
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-15 shadow-[0_20px_40px_rgba(47,52,48,0.06)] border border-outline-variant/15">
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
                  value={nom_complet}
                  onChange={(e) => setNomComplet(e.target.value)}
                  type="text"
                  placeholder="Mohamed Bensalem"
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="mohamed@example.com"
                    className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    value={phone_num}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    type="tel"
                    placeholder="+212 000 000 000"
                    className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block font-label text-sm font-medium text-on-surface-variant ml-1" htmlFor="password">Password</label>
                <input
                  id="password"
                  value={mdp}
                  onChange={(e) => setMdp(e.target.value)}
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
                  value={confirm_password}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-transparent focus:border-primary focus:ring-0 rounded-full px-6 py-4 text-on-surface transition-all placeholder:text-outline-variant"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary-dim text-on-primary font-headline font-bold py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary/10"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {isSignedUp && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-2xl border border-outline-variant/20 max-w-sm w-full text-center space-y-4 animate-fade-in">
            
            <div className="text-2xl font-bold text-primary">
              Inscription réussie
            </div>

            <p className="text-on-surface-variant text-sm">
              Votre compte a été créé avec succès.
            </p>

            <button
              onClick={() => setIsSignedUp(false)}
              className="mt-4 w-full bg-primary text-on-primary font-semibold py-3 rounded-full hover:bg-primary-dim transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
