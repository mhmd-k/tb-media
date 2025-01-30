import { FaExternalLinkAlt } from "react-icons/fa";
import { service } from "../types";
import ScrollAnimation from "react-animate-on-scroll";

function ServiceCard({ title, description, image, imageAlignment }: service) {
  const firstWord = title.split(" ")[0];
  const restOfTitle = title.split(" ").slice(1).join(" ");

  return (
    <div className="flex flex-col gap-4 md:flex-row mb-32 overflow-hidden">
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOnce
        className={`flex-1 max-w-[500px] p-4 md:p-8 order-1 ${imageAlignment === "left" ? "md:order-2" : "md:order-1"}`}
      >
        <img
          src={image}
          className="w-full h-full object-cover rounded-2xl"
          alt=""
        />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="fadeInRight"
        animateOnce
        className={`flex-1 flex flex-col justify-center order-2 ${imageAlignment === "left" ? "md:order-1" : "md:order-2"}`}
      >
        <h2 className="text-xl md:text-4xl font-bold mb-4">
          <span className="text-purple-500">{firstWord}</span> {restOfTitle}
        </h2>
        <div className="flex gap-2  mb-8">
          <div className="w-16 h-1 rounded-md bg-purple-500"></div>
          <div className="w-1 h-1 rounded-full bg-purple-500"></div>
          <div className="w-1 h-1 rounded-full bg-purple-500"></div>
          <div className="w-1 h-1 rounded-full bg-purple-500"></div>
        </div>
        {description.split(".").map((e) => (
          <p className="md:text-xl mb-4">{e}</p>
        ))}
        <a
          href="#"
          className="flex gap-2 items-center bg-purple-500 w-fit px-8 py-4 rounded-md mt-6 text-white transition-all hover:scale-105 hover:bg-purple-400"
        >
          اطلب خدمتك الان <FaExternalLinkAlt />
        </a>
      </ScrollAnimation>
    </div>
  );
}

export default ServiceCard;
