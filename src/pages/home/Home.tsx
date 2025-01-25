import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { LiaLinkSolid } from "react-icons/lia";
import Lottie from "react-lottie";
import SectionHeading from "../../components/SectionHeading";
import Services from "./Services";
import Partners from "./Partners";
import Team from "./Team";
import ContactPage from "./ContactPage";
import ScrollAnimation from "react-animate-on-scroll";
import {
  arrowLottieOptions,
  cubelottieOptions,
  phoneLottieOptions,
} from "../../lottiesOptions";

const socialLinks = [
  { to: "", icon: <FaTwitter /> },
  { to: "", icon: <FaTiktok /> },
  { to: "", icon: <FaFacebook /> },
  { to: "", icon: <FaInstagram /> },
  { to: "", icon: <FaSnapchat /> },
];

const features = [
  {
    title: "فريق متكامل ومتخصص",
    description:
      "نعمل كفريق واحد متماسك، كل فرد يمتلك الخبرة والمعرفة اللازمة لضمان نجاح مشروعك.",
    icon: "👥",
    color: "text-green-400",
  },
  {
    title: "الإتقان والاحترافية",
    description:
      "فريقنا المكون من الخبراء ملتزم بتقديم خدمات عالية الجودة تلبّي أعلى معايير الاحترافية.",
    icon: "⌨️",
    color: "text-yellow-400",
  },
  {
    title: "رؤية ثاقبة وخطط مدروسة",
    description:
      "نقدّم استراتيجيات شاملة ومخططات عمل تفصيلية مصممة خصيصًا لتحقيق أهدافك.",
    icon: "👁️",
    color: "text-red-400",
  },
  {
    title: "أسعار تنافسية",
    description:
      "نقدّم لك أفضل الأسعار في السوق مع ضمان تقديم قيمة مضافة لمشروعك.",
    icon: "💰",
    color: "text-purple-400",
  },
  {
    title: "دعم فني مستمر",
    description:
      "نقدّم لك الدعم الفني اللازم والمتخصص على مدار الساعة لضمان سير عملك بسلاسة.",
    icon: "💻",
    color: "text-blue-400",
  },
  {
    title: "حلول تلبي احتياجاتك",
    description:
      "نقدّم لك حلولًا متكاملة تغطي جميع جوانب مشروعك، بدءًا من التخطيط وحتى التنفيذ.",
    icon: "📱",
    color: "text-teal-400",
  },
];

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
                نقدم مختلف الخدمات للأعمال باحترافية عالية وإتقان مدروس، معتمدين
                في ذلك على أحدث الوسائل والتقنيات في إنشاء الخدمات التي تعتبر
                ركيزة أساسية في نجاح نشاطك التجاري
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
                  href=""
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
                  src="/home.png"
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

      <section className="py-20" style={{ background: "#171d2a" }}>
        <div className="text-white container px-4 overflow-hidden">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce>
            <SectionHeading title="كيف نعمل وننجح" />
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation animateOnce animateIn="zoomIn" key={index}>
                <div className="bg-main rounded-lg shadow-lg p-6 flex flex-col items-center h-full">
                  <div
                    className={`text-5xl mb-6 ${feature.color}`}
                    aria-hidden="true"
                  >
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

      <Partners />

      <Team />

      <ContactPage />
    </>
  );
}

export default Home;
