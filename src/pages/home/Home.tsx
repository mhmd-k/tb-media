import { LiaLinkSolid } from "react-icons/lia";
import Lottie from "react-lottie";
import SectionHeading from "../../components/SectionHeading";
import Services from "./Services";
import Partners from "./Partners";
// import Team from "./Team";
import ContactPage from "../ContactPage";
import ScrollAnimation from "react-animate-on-scroll";
import {
  arrowLottieOptions,
  cubelottieOptions,
  phoneLottieOptions,
} from "../../data/lottiesOptions";
import { homePageFeatures, socialLinks } from "../../data/data";

function Home() {
  return (
    <>
      <main>
        <div className="container grid grid-cols-12 bg-main mb-24 pt-32 min-h-screen">
          <div className="col-span-12 lg:col-span-7 mb-16 lg:mb-0 flex flex-col justify-center px-0 relative overflow-hidden">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <div className="absolute right-10 top-32 lottie">
                <Lottie
                  options={phoneLottieOptions}
                  width={50}
                  style={{ pointerEvents: "none" }}
                />
              </div>
              <h1 className="text-center text-purple-500 text-2xl my-5 md:text-5xl">
                نفهم <span className="text-white !important">تطلعاتكم</span>{" "}
                ونسعى
                <br />
                لتحقيقها
              </h1>
              <div className="flex gap-6 items-center justify-center mb-10">
                <span className="block w-24 h-1 bg-purnpm bg-purple-500 rounded-md"></span>
                <span className="block rotate-45 w-5 h-5 bg-purple-500 rounded-sm"></span>{" "}
                <span className="block w-24 h-1 bg-purple-500 rounded-md"></span>
              </div>
              <p className="text-center text-base mb-10 md:text-xl">
                <h1 className="text-center text-purple-500 text-2xl my-5 md:text-3xl">
                  TB MEDIA
                </h1>
                نحن هنا لنساعدك في تطوير وتحقيق أهدافك التجارية عبر الإنترنت من
                خلال استراتيجيات تسويق رقمي مبتكرة وحلول فعالة على منصات
                السوشيال ميديا. سواء كنت تسعى لزيادة الوعي بعلامتك التجارية أو
                تحسين التفاعل مع جمهورك، نحن نقدم لك الأدوات والخبرات اللازمة
                للوصول إلى النجاح.
              </p>
              <div className="relative mx-auto w-fit">
                <div className="absolute arrow-lottie lottie">
                  <Lottie
                    options={arrowLottieOptions}
                    width={100}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <a
                  className="px-8 py-4 bg-purple-600 w-fit transition-all flex gap-4 items-center rounded-lg hover:opacity-80 hover:scale-110"
                  href="https://wa.me/+966504421904"
                  target="_blank"
                >
                  اطلب خدمتك الان <LiaLinkSolid />
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <div className="col-span-12 lg:col-span-5 flex items-center flex-col overflow-hidden">
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className="p-12 relative h-400px home-image">
                <div className="absolute cube-lottie lottie">
                  <Lottie
                    options={cubelottieOptions}
                    width={90}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="home-image-cube w-16 h-16 rounded-xl opacity-80 absolute right-6 top-6"></div>
                <div className="home-image-cube w-12 h-12 rounded-xl absolute left-5 bottom-20 p-2">
                  <img src="/logo.jpg" alt="" loading="lazy" />
                </div>
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="/home.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>

              <ul className="flex gap-3 justify-center text-2xl mt-2">
                {socialLinks.map((Link, index) => (
                  <li key={index}>
                    <a
                      className="block rounded-lg transition-all bg-transparent p-2 hover:bg-purple-500"
                      href={Link.to}
                      target="_blank"
                    >
                      {Link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </div>
      </main>

      <section className="py-20 bg-secondary">
        <div className="text-white container px-4 overflow-hidden">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <SectionHeading title="كيف نعمل وننجح" />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homePageFeatures.map((feature, index) => (
              <ScrollAnimation animateOnce animateIn="zoomIn" key={index}>
                <div className="bg-main rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
                  <div className="text-5xl mb-6" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-center text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <Partners bgColor="#f5f5f5" textColor="#0d1018" />

      {/* <Team /> */}

      <ContactPage />
    </>
  );
}

export default Home;
