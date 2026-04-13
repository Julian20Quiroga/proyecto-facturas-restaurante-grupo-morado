/**
 * templates/DashboardLayout.jsx
 * ──────────────────────────────
 * RESPONSABILIDAD:
 *   - Layout visual principal para todas las vistas autenticadas.
 *   - Gestiona el toggle del Sidebar en móvil.
 *   - Obtiene rol y nombre del usuario desde el AuthContext (useAuth).
 *
 * Nota: role, userName y onLogout ya NO se pasan como props manuales;
 * se obtienen automáticamente del contexto de autenticación.
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar  from "../global/components/Topbar.jsx";
import Sidebar from "../global/components/Sidebar.jsx";
import { useAuth } from "../global/hooks/useAuth.js";
import { ROUTES } from "../global/constants/routes.js";

/**
 * @param {string}          screenName  - Nombre de la sección actual (title display)
 * @param {string}          activeItem  - key del item activo en el sidebar
 * @param {React.ReactNode} children    - Contenido de la página
 */
export default function DashboardLayout({ screenName, activeItem, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFF8F0] overflow-hidden">
      <Topbar
        screenName={screenName}
        onToggleSidebar={() => setSidebarOpen((v) => !v)}
      />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          role={user?.rol}
          active={activeItem}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onLogout={handleLogout}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 page-enter">
          {children}
        </main>
      </div>
    </div>
  );
}
