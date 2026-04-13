/**
 * global/components/PageHeader.jsx
 * ──────────────────────────────────
 * Encabezado de página: título a la izquierda, botón de acción opcional a la derecha.
 */

import Button from "./Button.jsx";

/**
 * @param {string}   title       - Título de la sección
 * @param {string}   subtitle    - Subtítulo opcional
 * @param {string}   actionLabel - Texto del botón de acción
 * @param {Function} onAction    - Handler del botón
 */
export default function PageHeader({ title, subtitle, actionLabel, onAction }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
      <div>
        <h1 className="text-xl font-black text-gray-900 leading-tight">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
      </div>
      {actionLabel && (
        <Button onClick={onAction} className="self-start sm:self-auto">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
