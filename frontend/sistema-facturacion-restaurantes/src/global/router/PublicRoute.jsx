/**
 * global/router/PublicRoute.jsx
 * ──────────────────────────────
 * RESPONSABILIDAD:
 *   - Permite acceso a rutas públicas (Login) solo cuando NO hay sesión.
 *   - Si el usuario ya está autenticado, lo redirige a su dashboard.
 *   - Evita que un usuario logueado vea la pantalla de login.
 */

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { getDashboardByRole } from "../constants/routes.js";

export default function PublicRoute() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={getDashboardByRole(user.rol)} replace />;
  }

  return <Outlet />;
}
