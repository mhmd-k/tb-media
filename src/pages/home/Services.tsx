import SectionHeading from "../../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import { services } from "../../data/data";

function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <SectionHeading title="خدماتنا" />
        </ScrollAnimation>

        <div className="flex flex-wrap gap-6 justify-center">
          {services.map((service, index) => (
            <ScrollAnimation animateIn="zoomIn" animateOnce>
              <div
                key={index}
                className="flex flex-col gap-8 p-6 items-center flex-1 min-w-80 max-w-80 border-purple"
              >
                <img
                  src={service.icon}
                  className="w-24"
                  alt=""
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold text-nowrap">
                  {service.title}
                </h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
