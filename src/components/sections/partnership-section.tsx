import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";

export function PartnershipSection() {
  return (
    <SectionWrapper id="partnership" className="bg-white">
      <SectionTitle
        title="CĐT & Quản lý vận hành"
        subtitle="Sự hợp tác giữa Nora và Best Western International"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-semibold text-secondary mb-3">
            Công ty CP Bất động sản Nora
          </h3>
          <p className="text-secondary/80 leading-relaxed mb-6">
            Chủ đầu tư uy tín với tầm nhìn phát triển bất động sản cao cấp
            tại các vị trí vàng của Hà Nội.
          </p>
          <h3 className="text-xl font-semibold text-secondary mb-3">
            Best Western International
          </h3>
          <p className="text-secondary/80 leading-relaxed">
            Tập đoàn quản lý khách sạn hàng đầu thế giới với hơn 4.700 khách sạn
            tại hơn 100 quốc gia. Đảm bảo tiêu chuẩn vận hành quốc tế 5 sao
            cho Imperial Palace.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="w-48 h-24 bg-secondary/10 flex items-center justify-center text-secondary/40 text-sm">
            Nora Logo
          </div>
          <div className="w-48 h-24 bg-secondary/10 flex items-center justify-center text-secondary/40 text-sm">
            Best Western Logo
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
