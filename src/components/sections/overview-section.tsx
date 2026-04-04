import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";
import { overviewItems } from "../../data/overview-data";

export function OverviewSection() {
  return (
    <SectionWrapper id="overview" className="bg-white">
      <SectionTitle title="Tổng quan dự án" subtitle="Thông tin chi tiết về dự án Imperial Palace" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewItems.map((item) => (
          <div key={item.label} className="border border-primary/30 p-5">
            <p className="text-xs uppercase tracking-wider text-secondary/50 mb-1">
              {item.label}
            </p>
            <p className="font-semibold text-secondary">{item.value}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
