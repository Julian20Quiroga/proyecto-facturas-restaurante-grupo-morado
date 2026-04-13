/**
 * global/router/AppRouter.jsx
 * ────────────────────────────
 * RESPONSABILIDAD:
 *   - Definir TODAS las rutas de la aplicación en un solo lugar.
 *   - Agrupar rutas por rol usando ProtectedRoute.
 *   - Redirigir `/` al dashboard del usuario según su rol.
 *
 * Cuando agregues una nueva sección, solo modifica este archivo.
 * Ningún componente de módulo necesita conocer cómo funciona el routing.
 */

import { Navigate, Route, Routes } from "react-router-dom";

// ── Guardas de ruta ───────────────────────────────────────────────────
import ProtectedRoute from "./ProtectedRoute.jsx";
import PublicRoute    from "./PublicRoute.jsx";

// ── Constantes de rutas ───────────────────────────────────────────────
import { ROUTES } from "../constants/routes.js";
import { ROLES }  from "../constants/roles.js";

// ── Auth ──────────────────────────────────────────────────────────────
import Login from "../../modules/auth/Login.jsx";

// ── Pages (Dashboards por rol) ────────────────────────────────────────
import AdminDashboard   from "../../pages/AdminDashboard.jsx";
import CashierDashboard from "../../pages/CashierDashboard.jsx";
import ChefDashboard    from "../../pages/ChefDashboard.jsx";
import WaiterDashboard  from "../../pages/WaiterDashboard.jsx";

// ── Módulos Admin ─────────────────────────────────────────────────────
import Usuarios        from "../../modules/user/Usuarios.jsx";
import Mesas           from "../../modules/table/Mesas.jsx";
import Inventario      from "../../modules/inventary/Inventario.jsx";
import Menus           from "../../modules/menu/Menus.jsx";
import AdminOrdenes    from "../../modules/order/AdminOrdenes.jsx";
import AdminInformes   from "../../modules/report/AdminInformes.jsx";

// ── Módulos Mesero ────────────────────────────────────────────────────
import MeseroOrdenes from "../../modules/order/WaiterOrdenes.jsx";

// ── Módulos Cajero ────────────────────────────────────────────────────
import Facturacion      from "../../modules/facturation/Facturacion.jsx";
import CajeroInformes   from "../../modules/report/CashierInformes.jsx";

// ── Componente raíz del router ────────────────────────────────────────
export default function AppRouter() {
  return (
    <Routes>
      {/* ── Ruta raíz: redirige según sesión (manejado por PublicRoute/ProtectedRoute) */}
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />

      {/* ── Rutas públicas (Login) ────────────────────────────────── */}
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>

      {/* ── Rutas Admin ──────────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route path={ROUTES.ADMIN_DASHBOARD}  element={<AdminDashboard />} />
        <Route path={ROUTES.ADMIN_USUARIOS}   element={<Usuarios />} />
        <Route path={ROUTES.ADMIN_MESAS}      element={<Mesas />} />
        <Route path={ROUTES.ADMIN_INVENTARIO} element={<Inventario />} />
        <Route path={ROUTES.ADMIN_MENUS}      element={<Menus />} />
        <Route path={ROUTES.ADMIN_ORDENES}    element={<AdminOrdenes />} />
        <Route path={ROUTES.ADMIN_INFORMES}   element={<AdminInformes />} />
      </Route>

      {/* ── Rutas Mesero ─────────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.MESERO]} />}>
        <Route path={ROUTES.MESERO_DASHBOARD} element={<WaiterDashboard />} />
        <Route path={ROUTES.MESERO_ORDENES}   element={<MeseroOrdenes />} />
      </Route>

      {/* ── Rutas Chef ───────────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.CHEF]} />}>
        <Route path={ROUTES.CHEF_DASHBOARD} element={<ChefDashboard />} />
      </Route>

      {/* ── Rutas Cajero ─────────────────────────────────────────── */}
      <Route element={<ProtectedRoute allowedRoles={[ROLES.CAJERO]} />}>
        <Route path={ROUTES.CAJERO_DASHBOARD}   element={<CashierDashboard />} />
        <Route path={ROUTES.CAJERO_FACTURACION} element={<Facturacion />} />
        <Route path={ROUTES.CAJERO_INFORMES}    element={<CajeroInformes />} />
      </Route>

      {/* ── 404: redirige al login ────────────────────────────────── */}
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
    </Routes>
  );
}
