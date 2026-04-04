import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";
import { amenityItems } from "../../data/amenities-data";

export function AmenitiesSection() {
  return (
    <SectionWrapper id="amenities" className="bg-cream">
      <SectionTitle title="Tiện ích" subtitle="Hệ thống tiện ích đẳng cấp 5 sao" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {amenityItems.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 text-center hover:shadow-lg transition-shadow"
          >
            <span className="text-4xl block mb-4">{item.icon}</span>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-secondary mb-2">
              {item.title}
            </h3>
            <p className="text-secondary/70 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
