/**
 * global/components/Sidebar.jsx
 * ──────────────────────────────
 * RESPONSABILIDAD:
 *   - Renderizar la navegación lateral del dashboard.
 *   - Usar <Link> de React Router para navegación real (sin recargas).
 *   - Obtener los items del sidebar según el rol desde sidebarItems.js.
 *
 * Props:
 *   role     {string}   - Rol del usuario actual (admin, mesero, chef, cajero)
 *   active   {string}   - key del item activo
 *   isOpen   {boolean}  - visibilidad en mobile
 *   onClose  {Function} - cierra el sidebar en móvil
 *   onLogout {Function} - handler del botón cerrar sesión
 */

import { Link } from "react-router-dom";
import { SIDEBAR_BY_ROLE } from "../constants/sidebarItems.js";

export default function Sidebar({
  role = "",
  active,
  isOpen = true,
  onClose,
  onLogout,
}) {
  const items = SIDEBAR_BY_ROLE[role] ?? [];

  return (
    <>
      {/* Overlay móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-14 left-0 bottom-0 z-30 w-56 bg-[#3D1A00] flex flex-col pt-4 transition-transform duration-300
          md:static md:translate-x-0 md:z-auto md:top-auto md:flex-shrink-0 md:h-full
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex-1 overflow-y-auto">
          {items.map(({ icon, label, key, path }) => {
            const isActive = active === key;
            return (
              <Link
                key={key}
                to={path}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-4 py-3 transition-colors
                  border-l-4 select-none no-underline
                  ${
                    isActive
                      ? "bg-[#E87722] border-[#FFA94D] text-white"
                      : "border-transparent text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span className="text-base flex-shrink-0">{icon}</span>
                <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer — Cerrar sesión */}
        <div className="px-4 py-4 border-t border-white/10">
          <button
            onClick={onLogout}
            className="flex items-center gap-2.5 text-gray-400 hover:text-red-400 transition-colors w-full"
          >
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-4 h-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="text-xs font-medium">Cerrar sesión</span>
          </button>
        </div>
      </aside>
    </>
  );
}
