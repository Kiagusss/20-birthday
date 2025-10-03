"use client"

import { useEffect, useRef, useState } from "react"

export function VideoReferencesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://www.tiktok.com/embed.js";
  script.async = true;
  document.body.appendChild(script);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  const sectionEl = sectionRef.current; // ✅ simpan di variabel

  if (sectionEl) {
    observer.observe(sectionEl);
  }

  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
    if (sectionEl) { // ✅ pakai variabel, bukan langsung ref
      observer.unobserve(sectionEl);
    }
  };
}, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-balance text-zinc-100 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Referensi Tempat yang akan kita kunjungin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@adaam.ridzuan/video/7358852079013711109"
              data-video-id="7358852079013711109"
              style={{ maxWidth: "605px", minWidth: "325px", }}
            >
              <section>
                <a
                  target="_blank"
                  title="@adaam.ridzuan"
                  href="https://www.tiktok.com/@adaam.ridzuan?refer=embed"
                  rel="noreferrer"
                >
                  @adaam.ridzuan
                </a>{" "}
                Selain kerak telor kuliner khas jakarta apa lagi ya ?? Yang tau coba komen !{" "}
                <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed" rel="noreferrer">
                  #fyp
                </a>{" "}
                <a
                  title="adaamridzuan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/adaamridzuan?refer=embed"
                  rel="noreferrer"
                >
                  #adaamridzuan
                </a>{" "}
                <a
                  title="keraktelor"
                  target="_blank"
                  href="https://www.tiktok.com/tag/keraktelor?refer=embed"
                  rel="noreferrer"
                >
                  #keraktelor
                </a>{" "}
                <a
                  title="kulineran"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kulineran?refer=embed"
                  rel="noreferrer"
                >
                  #kulineran
                </a>{" "}
                <a
                  title="kulinerjakarta"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kulinerjakarta?refer=embed"
                  rel="noreferrer"
                >
                  #kulinerjakarta
                </a>{" "}
                <a
                  title="dkijakarta"
                  target="_blank"
                  href="https://www.tiktok.com/tag/dkijakarta?refer=embed"
                  rel="noreferrer"
                >
                  #dkijakarta
                </a>{" "}
                <a
                  title="kulinerlegendaris"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kulinerlegendaris?refer=embed"
                  rel="noreferrer"
                >
                  #kulinerlegendaris
                </a>{" "}
                <a title="monas" target="_blank" href="https://www.tiktok.com/tag/monas?refer=embed" rel="noreferrer">
                  #monas
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ suara asli - Adam - AdamRidzuan"
                  href="https://www.tiktok.com/music/suara-asli-Adam-7358852092603222789?refer=embed"
                  rel="noreferrer"
                >
                  ♬ suara asli - Adam - AdamRidzuan
                </a>
              </section>
            </blockquote>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@wastaiqbal/video/7542478815877008696"
              data-video-id="7542478815877008696"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@wastaiqbal"
                  href="https://www.tiktok.com/@wastaiqbal?refer=embed"
                  rel="noreferrer"
                >
                  @wastaiqbal
                </a>{" "}
                Pameran Terbaru Museum Nasional Indonesia‼️ fix jadi spot keren baru buat kamu 🫵 HTM 40k tapi free untuk
                pelajar/mahasiswa.{" "}
                <a
                  title="atraksiakhirpekan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/atraksiakhirpekan?refer=embed"
                  rel="noreferrer"
                >
                  #atraksiakhirpekan
                </a>{" "}
                <a
                  title="jelajahakhirpekan"
                  target="_blank"
                  href="https://www.tiktok.com/tag/jelajahakhirpekan?refer=embed"
                  rel="noreferrer"
                >
                  #JelajahAkhirPekan
                </a>{" "}
                <a
                  title="healingbarengkeluarga"
                  target="_blank"
                  href="https://www.tiktok.com/tag/healingbarengkeluarga?refer=embed"
                  rel="noreferrer"
                >
                  #HealingBarengKeluarga
                </a>{" "}
                <a
                  title="museumnasional"
                  target="_blank"
                  href="https://www.tiktok.com/tag/museumnasional?refer=embed"
                  rel="noreferrer"
                >
                  #museumnasional
                </a>{" "}
                <a
                  title="placetogojkt"
                  target="_blank"
                  href="https://www.tiktok.com/tag/placetogojkt?refer=embed"
                  rel="noreferrer"
                >
                  #placetogojkt
                </a>{" "}
                <a
                  title="exhibitionjakarta"
                  target="_blank"
                  href="https://www.tiktok.com/tag/exhibitionjakarta?refer=embed"
                  rel="noreferrer"
                >
                  #exhibitionjakarta
                </a>{" "}
                <a
                  title="pameranjakarta"
                  target="_blank"
                  href="https://www.tiktok.com/tag/pameranjakarta?refer=embed"
                  rel="noreferrer"
                >
                  #pameranjakarta
                </a>{" "}
                <a
                  title="placetovisit"
                  target="_blank"
                  href="https://www.tiktok.com/tag/placetovisit?refer=embed"
                  rel="noreferrer"
                >
                  #placetovisit
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ Terbuang Dalam Waktu - Barasuara"
                  href="https://www.tiktok.com/music/Terbuang-Dalam-Waktu-7262663442083268609?refer=embed"
                  rel="noreferrer"
                >
                  ♬ Terbuang Dalam Waktu - Barasuara
                </a>
              </section>
            </blockquote>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@albertaamelia_/video/7509832788812516614"
              data-video-id="7509832788812516614"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@albertaamelia_"
                  href="https://www.tiktok.com/@albertaamelia_?refer=embed"
                  rel="noreferrer"
                >
                  @albertaamelia_
                </a>{" "}
                10 tempat yang wajib di datengin di Blok M! Walaupun antri tapi worth it 👀 • • •{" "}
                <a title="blokm" target="_blank" href="https://www.tiktok.com/tag/blokm?refer=embed" rel="noreferrer">
                  #blokm
                </a>{" "}
                <a
                  title="placetogojkt"
                  target="_blank"
                  href="https://www.tiktok.com/tag/placetogojkt?refer=embed"
                  rel="noreferrer"
                >
                  #placetogojkt
                </a>{" "}
                <a
                  title="wheretogojkt"
                  target="_blank"
                  href="https://www.tiktok.com/tag/wheretogojkt?refer=embed"
                  rel="noreferrer"
                >
                  #wheretogojkt
                </a>{" "}
                <a
                  title="southjakarta"
                  target="_blank"
                  href="https://www.tiktok.com/tag/southjakarta?refer=embed"
                  rel="noreferrer"
                >
                  #southjakarta
                </a>{" "}
                <a
                  title="kulinerviral"
                  target="_blank"
                  href="https://www.tiktok.com/tag/kulinerviral?refer=embed"
                  rel="noreferrer"
                >
                  #kulinerviral
                </a>{" "}
                <a
                  title="viraltiktok"
                  target="_blank"
                  href="https://www.tiktok.com/tag/viraltiktok?refer=embed"
                  rel="noreferrer"
                >
                  #viraltiktok
                </a>{" "}
                <a
                  title="mustvisit"
                  target="_blank"
                  href="https://www.tiktok.com/tag/mustvisit?refer=embed"
                  rel="noreferrer"
                >
                  #mustvisit
                </a>{" "}
                <a
                  title="musttry"
                  target="_blank"
                  href="https://www.tiktok.com/tag/musttry?refer=embed"
                  rel="noreferrer"
                >
                  #musttry
                </a>{" "}
                <a
                  title="bertafoodies"
                  target="_blank"
                  href="https://www.tiktok.com/tag/bertafoodies?refer=embed"
                  rel="noreferrer"
                >
                  #bertafoodies
                </a>{" "}
                <a
                  title="creatorsearchinsights"
                  target="_blank"
                  href="https://www.tiktok.com/tag/creatorsearchinsights?refer=embed"
                  rel="noreferrer"
                >
                  #creatorsearchinsights
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ original sound - ★"
                  href="https://www.tiktok.com/music/original-sound-7443553617305324334?refer=embed"
                  rel="noreferrer"
                >
                  ♬ original sound - ★
                </a>
              </section>
            </blockquote>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Embed TikTok @photostrip_ */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@photostrip_/video/7527222255902936376"
              data-video-id="7527222255902936376"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              <section>
                <a
                  target="_blank"
                  title="@photostrip_"
                  href="https://www.tiktok.com/@photostrip_?refer=embed"
                  rel="noreferrer"
                >
                  @photostrip_
                </a>{" "}
                🩷 Calling all couples 👫🏻 Nih minstrip kasih inspo pose FLIPBOOK buat kamu cobain bareng pasangan! 👋🏼
                Lari ke booth FLIPBOOK terdekat di: 📍 𝐏𝐇𝐎𝐓𝐎𝐒𝐓𝐑𝐈𝐏 𝐁𝐋𝐎𝐊 𝐌 - Ground TNT No. 001, Jakarta 📍𝐏𝐎𝐓𝐎𝐊𝐈𝐓𝐀 𝟏.𝟎 - Jl. Ngagel Tama No. 10A Kab A, Surabaya __________{" "}
                <a title="flipbook" target="_blank" href="https://www.tiktok.com/tag/flipbook?refer=embed" rel="noreferrer">
                  #flipbook
                </a>{" "}
                <a title="photostrip" target="_blank" href="https://www.tiktok.com/tag/photostrip?refer=embed" rel="noreferrer">
                  #photostrip
                </a>{" "}
                <a title="flipbookviral" target="_blank" href="https://www.tiktok.com/tag/flipbookviral?refer=embed" rel="noreferrer">
                  #flipbookviral
                </a>{" "}
                <a title="couple" target="_blank" href="https://www.tiktok.com/tag/couple?refer=embed" rel="noreferrer">
                  #couple
                </a>{" "}
                <a title="dateideas" target="_blank" href="https://www.tiktok.com/tag/dateideas?refer=embed" rel="noreferrer">
                  #dateideas
                </a>{" "}
                <a title="photobox" target="_blank" href="https://www.tiktok.com/tag/photobox?refer=embed" rel="noreferrer">
                  #photobox
                </a>{" "}
                <a title="photobooth" target="_blank" href="https://www.tiktok.com/tag/photobooth?refer=embed" rel="noreferrer">
                  #photobooth
                </a>{" "}
                <a title="blokm" target="_blank" href="https://www.tiktok.com/tag/blokm?refer=embed" rel="noreferrer">
                  #blokm
                </a>{" "}
                <a title="poseideas" target="_blank" href="https://www.tiktok.com/tag/poseideas?refer=embed" rel="noreferrer">
                  #poseideas
                </a>{" "}
                <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed" rel="noreferrer">
                  #foryou
                </a>{" "}
                <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed" rel="noreferrer">
                  #fyp
                </a>{" "}
                <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage?refer=embed" rel="noreferrer">
                  #foryoupage
                </a>{" "}
                <a title="reels" target="_blank" href="https://www.tiktok.com/tag/reels?refer=embed" rel="noreferrer">
                  #reels
                </a>{" "}
                <a title="fypシ゚" target="_blank" href="https://www.tiktok.com/tag/fyp%E3%82%B7%E3%82%9A?refer=embed" rel="noreferrer">
                  #fypシ゚
                </a>{" "}
                <a
                  target="_blank"
                  title="♬ original sound  - Photobox & Flipbook Indonesia"
                  href="https://www.tiktok.com/music/original-sound-Photobox-Flipbook-Indonesia-7527222242054212408?refer=embed"
                  rel="noreferrer"
                >
                  ♬ original sound - Photobox & Flipbook Indonesia
                </a>
              </section>
            </blockquote>
          </div>

          {/* TikTok @adaam.ridzuan */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@adaam.ridzuan/video/7358852079013711109"
              data-video-id="7358852079013711109"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              {/* ... isi original @adaam.ridzuan ... */}
            </blockquote>
          </div>

          {/* TikTok @wastaiqbal */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@wastaiqbal/video/7542478815877008696"
              data-video-id="7542478815877008696"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
              {/* ... isi original @wastaiqbal ... */}
            </blockquote>
          </div>

          {/* TikTok @albertaamelia_ */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@albertaamelia_/video/7509832788812516614"
              data-video-id="7509832788812516614"
              style={{ maxWidth: "605px", minWidth: "325px" }}
            >
            
            </blockquote>
          </div>
        </div>
      </div>
      
    </section>
  )
}
