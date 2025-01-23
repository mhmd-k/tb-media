import SectionHeading from "../components/SectionHeading";
import { Carousel } from "@material-tailwind/react";
import ScrollAnimation from "react-animate-on-scroll";

const partners = [
  "/partner.jpg",
  "/logo.jpg",
  "/partner.jpg",
  "/logo.jpg",
  "/partner.jpg",
];

const TabletPartners: Array<{ imageOne: string; imageTwo: string | null }> = [];

partners.forEach((e, i) => {
  if (i % 2 === 0) {
    TabletPartners.push({ imageOne: e, imageTwo: partners[i + 1] || null });
  }
});

function Partners() {
  return (
    <section className="py-20 bg-blue-gray-50 text-black" id="#partners">
      <div className="container mx-auto">
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <SectionHeading title="شركاء النجاح" />
        </ScrollAnimation>

        {/* Desktop view */}
        <div className="gap-4 justify-center flex-wrap hidden lg:flex">
          {partners.slice(0, 5).map((p, i) => (
            <div
              key={i}
              className="w-52 h-52 bg-white p-2 flex justify-center items-center"
            >
              <img className="object-fit" src={p} alt="" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <Carousel
          style={{ direction: "ltr" }}
          className="h-60 flex md:hidden"
          transition={{ type: "spring" }}
          navigation={({ setActiveIndex, activeIndex }) => (
            <div
              className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-6 items-center p-2"
              style={{ direction: "ltr" }}
            >
              {partners.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] hover:scale-150 ${
                    activeIndex === i
                      ? "w-8 bg-purple-500 hover:w-10 "
                      : "w-2 h-2 rounded-full bg-main "
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          nextArrow={() => null}
          prevArrow={() => null}
          children={partners.map((p, i) => (
            <div
              key={i}
              className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto"
            >
              <img className="object-fit" src={p} alt="" loading="lazy" />
            </div>
          ))}
          draggable
          autoplay
          loop
        ></Carousel>

        {/* Tablet Carousel */}
        <Carousel
          style={{ direction: "ltr" }}
          className="h-60 hidden md:flex lg:hidden"
          transition={{ type: "spring" }}
          navigation={({ setActiveIndex, activeIndex }) => (
            <div
              className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-6 items-center p-2"
              style={{ direction: "ltr" }}
            >
              {TabletPartners.map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] hover:scale-150 ${
                    activeIndex === i
                      ? "w-8 bg-purple-500 hover:w-10 "
                      : "w-2 h-2 rounded-full bg-main "
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          loop={true}
          nextArrow={() => null}
          prevArrow={() => null}
          draggable={true}
          autoplay={true}
          children={TabletPartners.map((p, i) => (
            <div className="flex" key={i}>
              <div className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto">
                <img
                  className="object-fit"
                  src={p.imageOne}
                  alt=""
                  loading="lazy"
                />
              </div>
              {p.imageTwo && (
                <div className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto">
                  <img
                    className="object-fit"
                    src={p.imageTwo}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
        ></Carousel>
      </div>
    </section>
  );
}

export default Partners;
