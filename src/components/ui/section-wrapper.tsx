import { useInView } from "../../hooks/use-intersection-observer";

type SectionWrapperProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
};

export function SectionWrapper({
  id,
  className = "",
  children,
  animate = true,
}: SectionWrapperProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 px-4 ${animate ? `animate-fade-in ${isInView ? "in-view" : ""}` : ""} ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
