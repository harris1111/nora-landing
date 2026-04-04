import { SectionWrapper } from "../ui/section-wrapper";

export function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wider text-secondary mb-4">
            Kiến trúc Indochine
          </h2>
          <div className="w-16 h-0.5 bg-primary mb-6" />
          <p className="text-secondary/80 leading-relaxed mb-4">
            Lấy cảm hứng từ phong cách kiến trúc Đông Dương đặc trưng của Hà Nội xưa,
            Imperial Palace tái hiện vẻ đẹp cổ điển qua từng đường nét thiết kế tinh xảo.
          </p>
          <p className="text-secondary/80 leading-relaxed">
            Sự kết hợp hài hòa giữa yếu tố Pháp và bản sắc Việt Nam tạo nên không gian
            sống sang trọng, ấm cúng và đầy tính nghệ thuật.
          </p>
        </div>
        <div className="aspect-[4/3] bg-secondary/10 flex items-center justify-center">
          <img
            src="/images/gallery/architecture-1.webp"
            alt="Kiến trúc Indochine"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
