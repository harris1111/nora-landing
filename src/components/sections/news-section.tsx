import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";
import { newsItems } from "../../data/news-data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function NewsSection() {
  return (
    <SectionWrapper id="news" className="bg-cream">
      <SectionTitle title="Tin tức" subtitle="Cập nhật mới nhất từ Imperial Palace" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsItems.map((item) => (
          <a
            key={item.title}
            href={item.slug}
            className="bg-white group hover:shadow-lg transition-shadow block"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-secondary/50 mb-2">{formatDate(item.date)}</p>
              <h3 className="font-semibold text-secondary mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-secondary/70 leading-relaxed">{item.excerpt}</p>
              <span className="inline-block mt-3 text-primary text-sm font-semibold uppercase tracking-wider">
                Xem thêm →
              </span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
