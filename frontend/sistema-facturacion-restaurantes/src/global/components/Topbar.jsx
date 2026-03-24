/**
 * global/components/Topbar.jsx
 * ─────────────────────────────
 * RESPONSABILIDAD:
 *   - Renderizar la barra superior del dashboard.
 *   - Obtener el usuario autenticado desde el AuthContext (useAuth).
 *
 * Props:
 *   screenName       {string}   - Nombre de la sección actual
 *   onToggleSidebar  {Function} - Handler para toggle de sidebar en móvil
 */

import { useAuth } from "../hooks/useAuth.js";

export default function Topbar({ screenName = "", onToggleSidebar }) {
  const { user } = useAuth();
  const role = user?.rol ?? "";
  const userName = user?.nombre ?? "Usuario";
  const roleInitial = userName ? userName[0].toUpperCase() : "U";

  // Etiqueta amigable del rol
  const roleLabel = {
    admin:  "Administrador",
    mesero: "Mesero",
    chef:   "Chef",
    cajero: "Cajero",
  }[role] ?? role;

  return (
    <header
      className="bg-[#1A0A00] h-14 px-4 md:px-6 flex items-center justify-between
      border-b-2 border-[#E87722] flex-shrink-0 z-10"
    >
      {/* Logo + toggle mobile */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="md:hidden w-8 h-8 flex items-center justify-center text-gray-400
            hover:text-white transition-colors mr-1"
          aria-label="Menú"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-lg bg-[#E87722] flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <span className="text-white font-black text-sm tracking-wide hidden sm:block">
          SFR Sistema
        </span>
      </div>

      {/* Screen label + User */}
      <div className="flex items-center gap-3 md:gap-4">
        {screenName && (
          <span className="text-gray-400 text-xs hidden md:block truncate max-w-[180px]">
            {screenName}
          </span>
        )}
        <div className="bg-[#3D1A00] rounded-full px-3 py-1.5 flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-full bg-[#E87722] flex items-center justify-center
            text-white text-xs font-bold flex-shrink-0"
          >
            {roleInitial}
          </div>
          <div className="hidden sm:block">
            <span className="text-white text-xs font-bold">{userName}</span>
            <span className="text-gray-400 text-xs"> · {roleLabel}</span>
          </div>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"
            className="w-3 h-3 text-gray-400 hidden sm:block">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  );
}
