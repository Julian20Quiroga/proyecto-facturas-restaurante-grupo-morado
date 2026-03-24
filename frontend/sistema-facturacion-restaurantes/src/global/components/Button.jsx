// src/components/Button.jsx
const variantClasses = {
  primary: "bg-[#E87722] text-white hover:bg-[#C45F10] border-transparent",
  danger: "bg-[#D64035] text-white hover:bg-red-700 border-transparent",
  success: "bg-[#2E9E5B] text-white hover:bg-green-700 border-transparent",
  ghost:
    "bg-transparent text-[#E87722] border border-[#E87722] hover:bg-orange-50",
  secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 border-transparent",
};

/**
 * Botón reutilizable con variantes.
 * @param {'primary'|'danger'|'success'|'ghost'|'secondary'} variant
 * @param {boolean} small - tamaño reducido
 * @param {boolean} fullWidth - ancho completo
 */
export default function Button({
  children,
  variant = "primary",
  small = false,
  fullWidth = false,
  type = "button",
  onClick,
  className = "",
}) {
  const sizeClass = small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        ${variantClasses[variant] ?? variantClasses.primary}
        ${sizeClass} ${widthClass}
        rounded-lg font-bold transition-colors duration-150 cursor-pointer whitespace-nowrap
        focus:outline-none focus:ring-2 focus:ring-[#E87722]/40
        ${className}
      `}
    >
      {children}
    </button>
  );
}
