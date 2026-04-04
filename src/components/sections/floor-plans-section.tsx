import { useState } from "react";
import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";

const floors = Array.from({ length: 7 }, (_, i) => i + 1);

export function FloorPlansSection() {
  const [activeFloor, setActiveFloor] = useState(1);

  return (
    <SectionWrapper id="floor-plans" className="bg-cream">
      <SectionTitle title="Mặt bằng" subtitle="Mặt bằng chi tiết từng tầng" />

      {/* Tab bar */}
      <div className="flex justify-center gap-2 mb-8 overflow-x-auto">
        {floors.map((floor) => (
          <button
            key={floor}
            onClick={() => setActiveFloor(floor)}
            className={`px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              activeFloor === floor
                ? "bg-primary text-secondary"
                : "bg-white text-secondary/60 hover:text-secondary"
            }`}
          >
            Tầng {floor}
          </button>
        ))}
      </div>

      {/* Floor plan image */}
      <div className="max-w-4xl mx-auto aspect-[16/10] bg-white flex items-center justify-center">
        <img
          src={`/images/floors/floor-${activeFloor}.webp`}
          alt={`Mặt bằng tầng ${activeFloor}`}
          className="w-full h-full object-contain"
          loading={activeFloor === 1 ? "eager" : "lazy"}
        />
      </div>
    </SectionWrapper>
  );
}
