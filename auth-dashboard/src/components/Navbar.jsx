import useAuth from "../hooks/useAuth";

function Navbar() {
  const { getCurrentUser, logout } = useAuth();
  const user = getCurrentUser();

  // Første bokstav for avatar
  const userInitial = user?.email ? user.email[0].toUpperCase() : "U";

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-slate-100 px-7 h-16 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      {/* Logo område */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-fuchsia-500 flex items-center justify-center shadow-md shadow-fuchsia-200">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-lg font-black text-slate-800 tracking-tight">
          Taskly
        </span>
      </div>

      {/* Bruker område */}
      <div className="flex items-center gap-3.5">
        <div className="flex items-center gap-2.5 bg-slate-50 rounded-full py-1 pl-1 pr-4 border border-slate-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-500 flex items-center justify-center text-white text-xs font-black shadow-sm">
            {userInitial}
          </div>
          <span className="text-sm font-bold text-slate-700">
            {user?.email || "User"}
          </span>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 bg-transparent border-2 border-pink-200 rounded-xl px-4 py-2 text-pink-500 text-sm font-black hover:bg-pink-50 transition-all duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Sign out
        </button>
      </div>
    </nav>
  );
}

export default Navbar;