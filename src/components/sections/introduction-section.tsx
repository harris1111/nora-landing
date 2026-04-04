import { SectionWrapper } from "../ui/section-wrapper";

export function IntroductionSection() {
  return (
    <SectionWrapper id="introduction" className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="aspect-[4/3] bg-secondary/10 flex items-center justify-center">
          <img
            src="/images/gallery/intro.webp"
            alt="Imperial Palace giới thiệu"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider text-secondary mb-4">
            Giới thiệu
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-6" />
          <p className="text-secondary/80 leading-relaxed mb-4">
            Tọa lạc tại vị trí đắc địa 11 Lê Thánh Tông, ngay trung tâm quận Hoàn Kiếm,
            Imperial Palace mang đến trải nghiệm sống đẳng cấp giữa lòng thủ đô nghìn năm văn hiến.
          </p>
          <p className="text-secondary/80 leading-relaxed">
            Chỉ cách Hồ Hoàn Kiếm vài bước chân, dự án là sự kết hợp hoàn hảo giữa
            kiến trúc Indochine tinh tế và tiện nghi hiện đại 5 sao, được quản lý vận hành
            bởi thương hiệu quốc tế Best Western.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
