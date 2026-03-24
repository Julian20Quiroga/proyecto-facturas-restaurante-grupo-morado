/**
 * global/services/apiClient.js
 * ─────────────────────────────
 * Instancia de Axios preconfigurada para consumir la API backend.
 *
 * RESPONSABILIDAD:
 *   - Configurar la base URL desde variables de entorno Vite
 *   - Inyectar el token de autenticación en cada request
 *   - Manejar respuestas 401 (token expirado → cerrar sesión)
 *
 * Cuando el backend esté listo, solo cambia VITE_API_URL en .env.
 * Ningún componente necesita conocer la URL ni el token directamente.
 */

import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10_000,
});

// ── Request Interceptor ───────────────────────────────────────────────
// Adjunta automáticamente el Bearer token en cada petición saliente.
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("sfr_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ── Response Interceptor ──────────────────────────────────────────────
// Si el backend responde 401 (token inválido/expirado), limpia la sesión
// y redirige al login sin que ningún componente tenga que manejarlo.
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("sfr_token");
      localStorage.removeItem("sfr_user");
      // Redirige limpiamente sin depender del router de React
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default apiClient;
