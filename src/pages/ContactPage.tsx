import { Typography } from "@material-tailwind/react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import SectionHeading from "../components/SectionHeading";
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "react-lottie";
import { contactLottieOptions } from "../data/lottiesOptions";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";
import { phoneNumber } from "../data/data";

const EMAIL_REGX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    address: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);

    if (
      !formData.user_name ||
      !formData.user_email ||
      !formData.address ||
      !formData.message
    ) {
      toast.error("الرجاء ملىء جميع الحقول", {
        style: {
          direction: "ltr",
        },
      });
      setIsLoading(false);
      return;
    }

    if (formData.user_name.length < 3) {
      toast.error("الاسم يجب أن يحوي 3 أحرف على الأقل", {
        style: {
          direction: "ltr",
        },
      });
      setIsLoading(false);
      return;
    }

    if (!EMAIL_REGX.test(formData.user_email)) {
      toast.error("الرجاء ادخال لبريد الالكتروني بشكل صحيح", {
        style: {
          direction: "ltr",
        },
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await emailjs.send(
        "service_7nwxn4a",
        "template_idadtin",
        {
          user_name: formData.user_name.trim(),
          user_email: formData.user_email.trim(),
          address: formData.address.trim(),
          message: formData.message.trim(),
        },
        "n7TymIX_cJrQy0kAH"
      );

      // console.log(res);

      if (res.status === 200) {
        toast.success("تم ارسال رسالتك بنجاح", {
          style: {
            direction: "ltr",
          },
        });

        setFormData({
          user_name: "",
          user_email: "",
          address: "",
          message: "",
        });

        return;
      }

      toast.error("الرجاء المحاولة مرة أخرى, حدث خطأ أثناء إرسال رسالتك");
    } catch (err) {
      console.error(err);

      toast.error("الرجاء المحاولة مرة أخرى, حدث خطأ أثناء إرسال رسالتك");
    } finally {
      setIsLoading(false);
    }
  };

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
                src="/logo-transparent-bg.png"
                alt="Marketive Logo"
                className="w-20 h-20 mx-auto md:mx-0"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl relative">
                  <div className="w-1 h-10 bg-purple-500 absolute right-6 -bottom-10"></div>
                  <FaLocationDot />
                </div>
                <p>المملكة العربية السعودية، الدمام </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl relative">
                  <div className="w-1 h-10 bg-purple-500 absolute right-6 -bottom-10"></div>

                  <BiPhoneIncoming />
                </div>
                <p style={{ direction: "ltr" }}>{phoneNumber}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-purple-500 p-4 text-xl">
                  <TfiEmail />
                </div>
                <p>info@tbmediatec.com</p>
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
            <form>
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
                    required
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
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
                    required
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
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
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <Typography
                  variant="h6"
                  className="-mb-3"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  رسالتك لنا
                </Typography>
                <div className="w-full min-w-[200px]">
                  <textarea
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border-2 border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-purple-500 hover:border-purple-500 shadow-sm focus:shadow"
                    style={{ background: "#171d2a" }}
                    rows={8}
                    required
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  className="text-white bg-purple-500 text-center w-full rounded-md py-2 font-bold text-sm hover:bg-purple-400"
                  disabled={isLoading}
                  onClick={sendEmail}
                >
                  {isLoading ? (
                    <ImSpinner2 className="animate-spin mx-auto text-white text-lg" />
                  ) : (
                    "ارسال"
                  )}
                </button>
              </div>
            </form>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
