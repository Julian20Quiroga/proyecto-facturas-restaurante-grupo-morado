/**
 * global/constants/roles.js
 * ─────────────────────────
 * Definición centralizada de roles del sistema SFR.
 * Un solo lugar de verdad; si mañana el backend cambia un rol,
 * solo se toca aquí.
 */

export const ROLES = {
  ADMIN:  "admin",
  MESERO: "mesero",
  CHEF:   "chef",
  CAJERO: "cajero",
};

/** Array de todos los roles — útil para validaciones */
export const ALL_ROLES = Object.values(ROLES);
