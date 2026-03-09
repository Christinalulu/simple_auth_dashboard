import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FloatingShapes from "../../src/components/FloatingShapes";

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [pwFocused, setPwFocused] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    // Simuler liten forsinkelse for loading state
    await new Promise(r => setTimeout(r, 500));

    const result = login(email, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
      setLoading(false);
    }
  }

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sky-50 flex items-center justify-center px-4 relative">
      <FloatingShapes />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-fuchsia-200">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-2xl font-black text-slate-800 tracking-tight">TaskMaster</span>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-8">
          <div className="mb-7">
            <h1 className="text-2xl font-black text-slate-800 tracking-tight">Welcome back 👋</h1>
            <p className="text-slate-500 font-medium mt-1 text-sm">Sign in to continue to your dashboard</p>
          </div>

          {/* Email input */}
          <div className="mb-4">
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
              Email
            </label>
            <div className={`flex items-center gap-3 rounded-2xl border-2 px-4 transition-all duration-200 bg-slate-50/50 ${
              emailFocused 
                ? "border-fuchsia-300 bg-white shadow-sm shadow-fuchsia-100" 
                : "border-slate-100"
            }`}>
              <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="flex-1 py-3.5 text-sm font-semibold text-slate-700 placeholder-slate-300 outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">
              Password
            </label>
            <div className={`flex items-center gap-3 rounded-2xl border-2 px-4 transition-all duration-200 bg-slate-50/50 ${
              pwFocused 
                ? "border-fuchsia-300 bg-white shadow-sm shadow-fuchsia-100" 
                : "border-slate-100"
            }`}>
              <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <input
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPwFocused(true)}
                onBlur={() => setPwFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="flex-1 py-3.5 text-sm font-semibold text-slate-700 placeholder-slate-300 outline-none bg-transparent"
              />
              <button 
                type="button" 
                onClick={() => setShowPw(!showPw)} 
                className="flex-shrink-0 text-slate-300 hover:text-slate-400 transition-colors"
              >
                {showPw ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2.5 bg-rose-50 border border-rose-200 rounded-2xl px-4 py-3 mb-5">
              <svg className="w-4 h-4 text-rose-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <p className="text-sm font-semibold text-rose-500">{error}</p>
            </div>
          )}

          {/* Login button */}
          <button
            onClick={handleLogin}
            disabled={!isFormValid || loading}
            className={`w-full py-4 rounded-2xl text-sm font-black transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid && !loading
                ? "bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-200 hover:shadow-xl hover:-translate-y-0.5"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
            ) : (
              <>Sign in <span className="text-base">→</span></>
            )}
          </button>

          {/* Register link */}
          <p className="text-center mt-5 text-sm text-slate-400 font-medium">
            Don't have an account?{" "}
            <Link 
              to="/register" 
              className="text-fuchsia-500 font-black hover:text-fuchsia-600 transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;