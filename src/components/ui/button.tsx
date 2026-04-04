type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "font-semibold uppercase tracking-wider px-8 py-3 transition-colors cursor-pointer";
  const variants = {
    primary: "bg-primary text-secondary hover:bg-primary/90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-secondary",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
