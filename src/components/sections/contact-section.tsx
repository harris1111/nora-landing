import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";
import { ContactForm } from "../form/contact-form";

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-secondary text-white">
      <SectionTitle title="Đăng ký tư vấn" subtitle="Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất" light />
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
