/**
 * global/router/ProtectedRoute.jsx
 * ──────────────────────────────────
 * RESPONSABILIDAD:
 *   - Verificar si el usuario está autenticado
 *   - Verificar si su rol tiene permiso para la ruta solicitada
 *   - Redirigir apropiadamente si alguna condición no se cumple
 *
 * Uso:
 *   <ProtectedRoute allowedRoles={["admin"]} />   → solo admins
 *   <ProtectedRoute allowedRoles={["admin", "cajero"]} />  → ambos
 */

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { getDashboardByRole } from "../constants/routes.js";
import { ROUTES } from "../constants/routes.js";

export default function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  // 1. No autenticado → ir a login (guardando la ruta original)
  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  // 2. Autenticado pero sin el rol correcto → ir a su propio dashboard
  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    return <Navigate to={getDashboardByRole(user.rol)} replace />;
  }

  // 3. Todo OK → renderizar la ruta solicitada
  return <Outlet />;
}
