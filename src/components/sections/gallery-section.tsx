import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SectionWrapper } from "../ui/section-wrapper";
import { SectionTitle } from "../ui/section-title";
import { galleryImages } from "../../data/gallery-data";

type Tab = "images" | "video";

export function GallerySection() {
  const [tab, setTab] = useState<Tab>("images");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <SectionWrapper id="gallery" className="bg-white">
      <SectionTitle title="Thư viện" />

      {/* Sub-tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {(["images", "video"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              tab === t
                ? "bg-primary text-secondary"
                : "bg-cream text-secondary/60 hover:text-secondary"
            }`}
          >
            {t === "images" ? "Hình ảnh" : "Video"}
          </button>
        ))}
      </div>

      {tab === "images" ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => {
                  setPhotoIndex(idx);
                  setLightboxOpen(true);
                }}
                className="aspect-[4/3] overflow-hidden cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={photoIndex}
            slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
          />
        </>
      ) : (
        <div className="max-w-3xl mx-auto aspect-video bg-secondary/10 flex items-center justify-center text-secondary/40">
          <p>Video placeholder — embed YouTube iframe here</p>
        </div>
      )}
    </SectionWrapper>
  );
}
