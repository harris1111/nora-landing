import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { heroSlides } from "../../data/hero-data";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.image}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-4">
          IMPERIAL PALACE
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-2xl">
          11 Lê Thánh Tông, Phan Chu Trinh, Hoàn Kiếm, Hà Nội
        </p>
        <a href="#contact">
          <Button>Đăng ký tư vấn</Button>
        </a>
      </div>
    </section>
  );
}
