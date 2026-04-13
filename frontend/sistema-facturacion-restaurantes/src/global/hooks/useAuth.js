/**
 * global/hooks/useAuth.js
 * ────────────────────────
 * Hook para consumir el AuthContext.
 * Separa la lógica de acceso al contexto de su implementación interna.
 * Todos los componentes que necesiten auth deben importar este hook.
 */

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }
  return ctx;
}
