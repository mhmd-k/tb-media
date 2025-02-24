import SectionHeading from "../../components/SectionHeading";
import { Carousel } from "@material-tailwind/react";
import ScrollAnimation from "react-animate-on-scroll";
import { partners } from "../../data/data";

const TabletPartners: Array<{ imageOne: string; imageTwo: string | null }> = [];

partners.forEach((e, i) => {
  if (i % 2 === 0) {
    TabletPartners.push({ imageOne: e, imageTwo: partners[i + 1] || null });
  }
});

function Partners({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) {
  return (
    <section className="py-20 text-black" style={{ backgroundColor: bgColor }}>
      <div className="container mx-auto" style={{ color: textColor }}>
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <SectionHeading title="شركاء النجاح" />
        </ScrollAnimation>

        {/* Desktop view */}
        <div className="gap-4 justify-center flex-wrap hidden lg:flex">
          {partners.slice(0, 5).map((p, i) => (
            <div
              key={i}
              className="w-52 h-52 bg-white p-2 flex justify-center items-center overflow-hidden"
            >
              <img
                className="w-full h-full object-contain"
                src={p}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <Carousel
          style={{ direction: "ltr" }}
          className="h-60 flex md:hidden"
          transition={{ type: "spring" }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div
              className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 items-center p-2"
              style={{ direction: "ltr" }}
            >
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-purple-500" : "w-4 bg-gray-600"
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
              className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto overflow-hidden"
            >
              <img
                className="w-full h-full object-contain"
                src={p}
                alt=""
                loading="lazy"
              />
            </div>
          ))}
          draggable
          autoplay
          loop
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        ></Carousel>

        {/* Tablet Carousel */}
        <Carousel
          style={{ direction: "ltr" }}
          className="h-60 hidden md:flex lg:hidden"
          transition={{ type: "spring" }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div
              className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 items-center p-2"
              style={{ direction: "ltr" }}
            >
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-purple-500" : "w-4 bg-gray-600"
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
              <div className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto overflow-hidden">
                <img
                  className="w-full h-full object-contain"
                  src={p.imageOne}
                  alt=""
                  loading="lazy"
                />
              </div>
              {p.imageTwo && (
                <div className="w-52 h-52 bg-white p-2 flex justify-center items-center mx-auto overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={p.imageTwo}
                    alt=""
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          ))}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        ></Carousel>
      </div>
    </section>
  );
}

export default Partners;
