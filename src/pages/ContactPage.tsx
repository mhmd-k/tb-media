import { Button, Typography } from "@material-tailwind/react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import SectionHeading from "../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "react-lottie";
import { contactLottieOptions } from "../lottiesOptions";

function ContactPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row text-white">
          {/* Contact Info Section */}
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce
            className="w-full lg:w-1/2  p-8 md:p-16 flex flex-col rounded-2xl bg-secondary"
          >
            <div className="mb-6">
              <img
                src="/logo.jpg"
                alt="Marketive Logo"
                className="w-20 h-20 mx-auto md:mx-0"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl relative">
                  <div className="w-1 h-10 bg-purple-500 absolute right-6 -bottom-10"></div>
                  <FaLocationDot />
                </div>
                <p>المملكة العربية السعودية، مدينة الرياض</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl relative">
                  <div className="w-1 h-10 bg-purple-500 absolute right-6 -bottom-10"></div>

                  <BiPhoneIncoming />
                </div>
                <p>0552200688</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl">
                  <TfiEmail />
                </div>
                <p>Support@marketive.sa.com</p>
              </div>

              <Lottie
                options={contactLottieOptions}
                height={300}
                style={{ cursor: "default", pointerEvents: "none" }}
              />
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
              <Typography
                variant="h6"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                الاسم كامل
              </Typography>
              <div className="w-full min-w-[200px]">
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography
                variant="h6"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                البريد الإلكتروني
              </Typography>
              <div className="w-full min-w-[200px]">
                <input
                  type="email"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography
                variant="h6"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                العنوان
              </Typography>
              <div className="w-full min-w-[200px]">
                <input
                  type="text"
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                />
              </div>

              <Typography
                variant="h6"
                className="-mb-3"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                رسالتك لنا (اختياري)
              </Typography>
              <div className="w-full min-w-[200px]">
                <textarea
                  className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                  style={{ background: "#171d2a" }}
                  rows={8}
                />
              </div>

              <Button
                color="purple"
                fullWidth
                className="text-black"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
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
