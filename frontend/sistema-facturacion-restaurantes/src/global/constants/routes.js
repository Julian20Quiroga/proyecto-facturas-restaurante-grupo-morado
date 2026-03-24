/**
 * global/constants/routes.js
 * ──────────────────────────
 * Todas las rutas de la aplicación en un único lugar.
 * Nunca escribas strings de ruta directamente en componentes:
 * importa siempre desde aquí → más fácil refactorizar y menos bugs.
 */

export const ROUTES = {
  // ── Públicas ──────────────────────────────
  LOGIN: "/login",

  // ── Admin ─────────────────────────────────
  ADMIN_DASHBOARD:  "/admin",
  ADMIN_USUARIOS:   "/admin/usuarios",
  ADMIN_MESAS:      "/admin/mesas",
  ADMIN_INVENTARIO: "/admin/inventario",
  ADMIN_MENUS:      "/admin/menus",
  ADMIN_ORDENES:    "/admin/ordenes",
  ADMIN_INFORMES:   "/admin/informes",

  // ── Mesero ────────────────────────────────
  MESERO_DASHBOARD: "/mesero",
  MESERO_ORDENES:   "/mesero/ordenes",

  // ── Chef ──────────────────────────────────
  CHEF_DASHBOARD: "/chef",

  // ── Cajero ────────────────────────────────
  CAJERO_DASHBOARD:    "/cajero",
  CAJERO_FACTURACION:  "/cajero/facturacion",
  CAJERO_INFORMES:     "/cajero/informes",
};

/**
 * Retorna la ruta del dashboard principal según el rol del usuario.
 * Se usa al hacer login exitoso o al redirigir desde rutas protegidas.
 */
export function getDashboardByRole(role) {
  const map = {
    admin:  ROUTES.ADMIN_DASHBOARD,
    mesero: ROUTES.MESERO_DASHBOARD,
    chef:   ROUTES.CHEF_DASHBOARD,
    cajero: ROUTES.CAJERO_DASHBOARD,
  };
  return map[role] ?? ROUTES.LOGIN;
}
