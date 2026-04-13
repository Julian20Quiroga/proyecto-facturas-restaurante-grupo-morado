/**
 * global/context/AuthContext.jsx
 * ────────────────────────────────
 * RESPONSABILIDAD:
 *   - Proveer el estado de autenticación a toda la app
 *   - Orquestar login/logout usando authService (capa de servicio)
 *   - Persistir la sesión en localStorage entre recargas
 *
 * Los componentes nunca llaman a authService directamente:
 * solo consumen este contexto vía el hook useAuth().
 */

import { createContext, useCallback, useMemo, useState } from "react";
import { login as loginService, logout as logoutService } from "../services/authService.js";

// ── Contexto ──────────────────────────────────────────────────────────
export const AuthContext = createContext(null);

// ── Utilidades de persistencia ────────────────────────────────────────
function loadUserFromStorage() {
  try {
    const raw = localStorage.getItem("sfr_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user, token) {
  localStorage.setItem("sfr_user", JSON.stringify(user));
  localStorage.setItem("sfr_token", token);
}

function clearSession() {
  localStorage.removeItem("sfr_user");
  localStorage.removeItem("sfr_token");
}

// ── Provider ──────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUserFromStorage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Inicia sesión. Llama al servicio de auth, guarda la sesión
   * y actualiza el estado global.
   */
  const login = useCallback(async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const { user: userData, token } = await loginService(email, password);
      saveSession(userData, token);
      setUser(userData);
      return userData; // el router puede usar esto para redirigir
    } catch (err) {
      setError(err.message ?? "Error al iniciar sesión");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Cierra sesión. Llama al servicio para invalidar en backend,
   * luego limpia el estado local.
   */
  const logout = useCallback(async () => {
    try {
      await logoutService();
    } finally {
      clearSession();
      setUser(null);
    }
  }, []);

  const value = useMemo(
    () => ({ user, loading, error, login, logout, isAuthenticated: !!user }),
    [user, loading, error, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
