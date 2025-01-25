import SectionHeading from "../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "react-lottie";
import { cubelottieOptions } from "../lottiesOptions";
import ContactPage from "./home/ContactPage";

function HowAreWe() {
  return (
    <>
      <main>
        <div className="container mx-auto pt-32 flex gap-8 justify-center items-center flex-wrap overflow-hidden">
          <div className="w-full lg:w-4/12 flex items-center flex-col overflow-hidden p-4">
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <div className="p-12 relative home-image">
                <div className="absolute cube-lottie lottie">
                  <Lottie
                    options={cubelottieOptions}
                    width={90}
                    style={{ pointerEvents: "none" }}
                  />
                </div>
                <div className="home-image-cube w-32 h-32 rounded-xl opacity-80 absolute right-0 top-0"></div>
                <div className="home-image-cube w-24 h-24 rounded-xl absolute left-0 bottom-20 p-6">
                  <img
                    className="rounded-lg"
                    src="/logo.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <img
                  className="w-full h-full object-cover rounded-3xl"
                  src="/home.png"
                  alt=""
                  loading="lazy"
                />
              </div>
            </ScrollAnimation>
          </div>

          <div className="p-5 w-full lg:w-5/12">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <SectionHeading title="من نحن" />
              <p className="mb-6 text-lg">
                ماركتيف شركة سعودية رائدة في خدمات الأعمال، تأسست في المملكة
                العربية السعودية، مدينة الرياض حي الرمال.
              </p>
              <p className="mb-6 text-lg">
                نقدم مختلف الخدمات للأعمال باحترافية عالية وإتقان مدروس، معتمدين
                في ذلك على أحدث الوسائل والتقنيات.
              </p>
              <p className="mb-6 text-lg">
                نفتخر بأننا ساعدنا الكثير من الشركات ورواد الأعمال من مختلف
                التصنيفات على جعل نشاطهم التجاري أكثر فعالية والإرتقاء به إلى
                قمة الابداع والنجـاح.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </main>

      <section>
        <div className="container mx-auto flex gap-8 justify-center items-center flex-wrap overflow-hidden">
          <div className="w-full lg:w-5/12">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <SectionHeading title="رؤيتنا" />
              <p className="text-lg">
                رؤية 2030 تعبر عن أهداف آمالنا على المدى البعيد، ومن وطننا نستمد
                القوة وندعم قدراتنا الفريدة، ونسعى بذلك إلى تحقيق تطلعاتنا نحو
                مرحلة جديدة
              </p>
            </ScrollAnimation>
          </div>

          <div className="w-full lg:w-5/12 p-8">
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <img
                src="/vision.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <ContactPage />
    </>
  );
}

export default HowAreWe;
