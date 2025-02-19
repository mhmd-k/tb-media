import SectionHeading from "../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "react-lottie";
import { cubelottieOptions } from "../data/lottiesOptions";
import ContactPage from "./ContactPage";
// import Counter from "../components/Counter";
import { Typewriter } from "react-simple-typewriter";
import { FaCalendarAlt, FaChartBar, FaCheckCircle } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { howAreWetextArr } from "../data/data";

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
                  src="/home.jpg"
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
                نحن في TB Media نقدم خدمات تسويق إلكتروني متكاملة لتمكينك من
                تحقيق النجاح عبر وسائل التواصل الاجتماعي. يشمل فريقنا إدارة
                حسابات السوشيال ميديا، تصميم الهوية التجارية والشعارات، تصميم
                محتوى مميز لمنصات التواصل، التصوير الاحترافي وتغطية الفعاليات،
                بالإضافة إلى تصميم المواقع الإلكترونية وتطبيقات الموبايل التي
                تساعدك على التميز في سوقك.
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
        <div className="container mx-auto px-4 flex gap-8 justify-center items-center flex-wrap overflow-hidden">
          <div className="w-full lg:w-5/12">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce>
              <SectionHeading title="رؤيتنا" />
              <p className="text-lg">
                رؤيتنا في TB Media هي أن نكون الشريك الأمثل لكل الأعمال التجارية
                التي تسعى للنمو الرقمي والابتكار. نحن نؤمن بأن التسويق
                الإلكتروني هو أداة قوية لتحقيق التميز، لذا نعمل على تقديم حلول
                مبتكرة وشاملة تساعد عملاءنا على بناء وجود قوي وملموس على
                الإنترنت، وتعزيز التفاعل مع جمهورهم، مما يسهم في نجاحهم وزيادة
                مبيعاتهم وتحقيق نمو مستدام.
              </p>
            </ScrollAnimation>
          </div>

          <div className="w-full lg:w-5/12 p-8">
            <ScrollAnimation animateIn="fadeInRight" animateOnce>
              <img
                src="/vision.png"
                className="w-full h-full object-contain mix-blend-multiply"
                alt=""
                loading="lazy"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10">
        <div className="container px-5 mx-auto overflow-hidden">
          {/* <SectionHeading title="في TB-Media" /> */}

          {/* Statistics Section */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 w-full max-w-[1000px] mx-auto">
            <div className="bg-main rounded-lg p-10 flex border-1 border-transparent flex-col items-center gap-4 transition-all hover:border-purple-500">
              <p className="text-5xl relative">
                <Counter value={200} />
                <span className="absolute -top-4 -left-10 text-purple-500">
                  +
                </span>
              </p>
              <p className="mt-2">خدمة مقدمة</p>
            </div>
            <div className="bg-main rounded-lg p-10 flex flex-col items-center gap-4">
              <p className="text-5xl relative">
                <Counter value={100} />
                <span className="absolute -top-4 -left-10 text-purple-500">
                  +
                </span>
              </p>
              <p className="mt-2">عميل راضي</p>
            </div>
            <div className="bg-main rounded-lg p-10 flex flex-col items-center gap-4">
              <p className="text-5xl relative">
                <Counter value={50} />
                <span className="absolute -top-4 -left-10 text-purple-500">
                  +
                </span>
              </p>
              <p className="mt-2">مشروع مكتمل</p>
            </div>
          </div> */}

          {/* Description Section */}
          <div className="text-center w-full flex justify-center my-14">
            <p className="text-xs md:text-lg flex font-bold text-nowrap">
              <span className="text-purple-500">| نحن في Tb-media |</span>
              <Typewriter
                words={howAreWetextArr}
                typeSpeed={70}
                deleteSpeed={50}
                cursor
                loop
                cursorColor="#673ab7"
              />
            </p>
          </div>

          {/* Steps Section */}
          <div className="flex flex-wrap gap-4 justify-center items-center w-full mb-8 mx-auto">
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              className="flex flex-col items-center justify-center bg-purple-500 p-4 h-44 flex-1 rounded-xl"
            >
              <FaChartBar size={70} />
              <p className="mt-6 text-lg font-bold">نحلل احتياجك</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              className="flex flex-col items-center justify-center bg-purple-500 p-4 h-44 flex-1 rounded-xl"
            >
              <FaCalendarAlt size={70} />
              <p className="mt-6 text-lg font-bold">نجهز الخطة</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              className="flex flex-col items-center justify-center bg-purple-500 p-4 h-44 flex-1 rounded-xl"
            >
              <IoRocketSharp size={70} />
              <p className="mt-6 text-lg font-bold">ننطلق للإبداع</p>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInDown"
              animateOnce
              className="flex flex-col items-center justify-center bg-purple-500 p-4 h-44 flex-1 rounded-xl"
            >
              <FaCheckCircle size={70} />
              <p className="mt-6 text-lg font-bold">نحقق أفضل النتائج</p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <ContactPage />
    </>
  );
}

export default HowAreWe;
