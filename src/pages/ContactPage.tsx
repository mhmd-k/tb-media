import { Button, Typography } from "@material-tailwind/react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import SectionHeading from "../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";

function ContactPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row text-white min-h-screen">
          {/* Contact Info Section */}

          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce
            className="w-full lg:w-1/2  p-8 md:p-16 flex flex-col rounded-2xl"
            style={{ background: "#171d2a" }}
          >
            <div className="mb-6">
              <img
                src="/logo.jpg"
                alt="Marketive Logo"
                className="w-20 h-20 mx-auto md:mx-0"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaLocationDot />
                <p>المملكة العربية السعودية، مدينة الرياض</p>
              </div>
              <div className="flex items-center space-x-4">
                <BiPhoneIncoming />
                <p>0552200688</p>
              </div>
              <div className="flex items-center space-x-4">
                <TfiEmail />
                <p>Support@marketive.sa.com</p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Form Section */}
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce
            className="w-full lg:w-1/2 p-8 md:p-16"
          >
            <SectionHeading title="تواصل معنا واطلب خدمتك" />
            <div className="space-y-4">
              <Typography variant="h6" className="-mb-3">
                الاسم كامل
              </Typography>
              <div class="w-full min-w-[200px]">
                <input
                  type="text"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography variant="h6" className="-mb-3">
                البريد الإلكتروني
              </Typography>
              <div className="w-full min-w-[200px]">
                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography variant="h6" className="-mb-3">
                العنوان
              </Typography>
              <div className="w-full min-w-[200px]">
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography variant="h6" className="-mb-3">
                رسالتك لنا (اختياري)
              </Typography>
              <div className="w-full min-w-[200px]">
                <textarea
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                  rows={8}
                />
              </div>

              <Button color="purple" fullWidth className="text-black">
                إرسال
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
