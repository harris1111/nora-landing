type SectionTitleProps = {
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-10">
      <h2 className={`text-2xl md:text-3xl font-semibold uppercase tracking-wider ${light ? "text-white" : "text-secondary"}`}>
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-primary mx-auto mt-3" />
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto ${light ? "text-white/70" : "text-secondary/70"}`}>{subtitle}</p>
      )}
    </div>
  );
}
