// Button Component - Reusable button with different variants
function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}) {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <button
      className={buttonClass}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
