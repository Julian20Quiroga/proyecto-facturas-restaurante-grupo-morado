/**
 * global/services/authService.js
 * ────────────────────────────────
 * Capa de servicio para autenticación.
 *
 * RESPONSABILIDAD:
 *   - Comunicarse con el endpoint de autenticación del backend
 *   - Retornar datos normalizados al AuthContext
 *
 * Esta capa está actualmente MOCKEADA con credenciales de prueba.
 * Para conectar al backend real, reemplaza las funciones `login` y
 * `logout` con las llamadas Axios correspondientes. El resto de la
 * aplicación NO necesita cambios.
 *
 * Credenciales mock de prueba:
 *   admin@sfr.com   / admin123   → rol: admin
 *   mesero@sfr.com  / mesero123  → rol: mesero
 *   chef@sfr.com    / chef123    → rol: chef
 *   cajero@sfr.com  / cajero123  → rol: cajero
 */

// import apiClient from "./apiClient.js"; // ← descomentar al integrar backend

// ── Usuarios mock ──────────────────────────────────────────────────────
const MOCK_USERS = [
  {
    id: 1,
    nombre: "Juan García",
    email: "admin@sfr.com",
    password: "admin123",
    rol: "admin",
  },
  {
    id: 2,
    nombre: "Laura Martínez",
    email: "mesero@sfr.com",
    password: "mesero123",
    rol: "mesero",
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    email: "chef@sfr.com",
    password: "chef123",
    rol: "chef",
  },
  {
    id: 4,
    nombre: "Ana López",
    email: "cajero@sfr.com",
    password: "cajero123",
    rol: "cajero",
  },
];

/**
 * Autentica al usuario y retorna sus datos + token.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{user: object, token: string}>}
 */
export async function login(email, password) {
  // ── MOCK (reemplazar con llamada real al backend) ──────────────────
  await new Promise((r) => setTimeout(r, 600)); // simula latencia de red

  const found = MOCK_USERS.find(
    (u) => u.email === email && u.password === password,
  );

  if (!found) {
    throw new Error("Credenciales incorrectas");
  }

  const { password: _, ...user } = found; // omitir password del objeto retornado
  const token = `mock-token-${user.id}-${Date.now()}`;

  return { user, token };

  // ── BACKEND REAL (descomentar cuando esté listo) ───────────────────
  // const { data } = await apiClient.post("/auth/login", { email, password });
  // return { user: data.user, token: data.token };
}

/**
 * Cierra la sesión en el backend.
 * @returns {Promise<void>}
 */
export async function logout() {
  // ── MOCK ──────────────────────────────────────────────────────────
  await new Promise((r) => setTimeout(r, 200));

  // ── BACKEND REAL ──────────────────────────────────────────────────
  // await apiClient.post("/auth/logout");
}
