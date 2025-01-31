// this file is used to export all the text, icons, images used in the project

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaTiktok,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { service, teamMember } from "./types";

export const socialLinks = [
  { to: "https://your-X-link", icon: <BsTwitterX /> },
  { to: "", icon: <FaTiktok /> },
  { to: "", icon: <FaFacebook /> },
  { to: "", icon: <FaInstagram /> },
  { to: "", icon: <FaSnapchat /> },
];

export const headerLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/how-are-we", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/partners", label: "شركائنا" },
  { to: "/contact-us", label: "تواصل معنا" },
];

export const headerSocialLinks = [
  { to: "", icon: <FaFacebook /> },
  { to: "https://your-X-link", icon: <BsTwitterX /> },
  { to: "", icon: <FaLinkedin /> },
];

export const homePageFeatures = [
  {
    title: "فريق متكامل ومتخصص",
    description:
      "نعمل كفريق واحد متماسك، كل فرد يمتلك الخبرة والمعرفة اللازمة لضمان نجاح مشروعك.",
    icon: "👥",
  },
  {
    title: "الإتقان والاحترافية",
    description:
      "فريقنا المكون من الخبراء ملتزم بتقديم خدمات عالية الجودة تلبّي أعلى معايير الاحترافية.",
    icon: "⌨️",
  },
  {
    title: "رؤية ثاقبة وخطط مدروسة",
    description:
      "نقدّم استراتيجيات شاملة ومخططات عمل تفصيلية مصممة خصيصًا لتحقيق أهدافك.",
    icon: "👁️",
  },
  {
    title: "أسعار تنافسية",
    description:
      "نقدّم لك أفضل الأسعار في السوق مع ضمان تقديم قيمة مضافة لمشروعك.",
    icon: "💰",
  },
  {
    title: "دعم فني مستمر",
    description:
      "نقدّم لك الدعم الفني اللازم والمتخصص على مدار الساعة لضمان سير عملك بسلاسة.",
    icon: "💻",
  },
  {
    title: "حلول تلبي احتياجاتك",
    description:
      "نقدّم لك حلولًا متكاملة تغطي جميع جوانب مشروعك، بدءًا من التخطيط وحتى التنفيذ.",
    icon: "📱",
  },
];

export const partners = [
  "/partner.jpg",
  "/logo.jpg",
  "/partner.jpg",
  "/logo.jpg",
  "/partner.jpg",
];

export const services = [
  {
    title: "موشن غرافيك",
    icon: "/motion-graphics.png",
  },
  {
    title: "دعم فني للمواقع الاكترونية",
    icon: "/customer-service-agent.png",
  },
  {
    title: "تصميم تطبيقات الموبايل",
    icon: "/user-interface.png",
  },
  {
    title: "تصميم مواقع ويب",
    icon: "/coding.png",
  },
  {
    title: "تصاميم وبناء هوية تجارية",
    icon: "/trade-identity.png",
  },
];

export const team: teamMember[] = [
  {
    name: "وليد طالب",
    img: "/home.png",
    title: "مؤسس ومدير العمل",
    social: [
      { type: "whatsapp", link: "https://wa.me/+966504421904" },
      { type: "facebook", link: "" },
      { type: "linkedin", link: "" },
    ],
  },
];

export const howAreWetextArr = [
  "نفهم تطلعاتكم",
  "نجعل نشاطهم التجاري أكثر فعالية",
  "نركز على الإبداع والعمل باحترافية عالية",
  "لا نغفل أهمية ضمان الأمان والحماية",
];

export const extendedServices: service[] = [
  {
    title: "موشن غرافيك",
    description:
      "   نقوم في ماركتيف بإدارة حساباتك على مواقع التواصل الاجتماعي و إنشاء الحملات الإعلانية  في المنصات المختلفة  فهي تعتبر طريقة فعالة لجذب الجمهور المستهدف وزيادة المبيعات. نبتكر حملات إعلانية مستهدفة تستند إلى متطلبات واهتمامات الجمهور المستهدف والمنصة المستهدفة من منصات مواقع التواصل الاجتماعي مثل  سنابشات Snapchat  , فيسبوك Facebook , إنستغرام Instagram  ,تكتوك TikTok  و إكس X  وغيرها من المنصات . ",
    image: "/service.jpg",
    imageAlignment: "left",
  },
  {
    title: "دعم فني للمواقع الاكترونية",
    description:
      "   نقوم في ماركتيف بإدارة حساباتك على مواقع التواصل الاجتماعي و إنشاء الحملات الإعلانية  في المنصات المختلفة  فهي تعتبر طريقة فعالة لجذب الجمهور المستهدف وزيادة المبيعات. نبتكر حملات إعلانية مستهدفة تستند إلى متطلبات واهتمامات الجمهور المستهدف والمنصة المستهدفة من منصات مواقع التواصل الاجتماعي مثل  سنابشات Snapchat  , فيسبوك Facebook , إنستغرام Instagram  ,تكتوك TikTok  و إكس X  وغيرها من المنصات . ",
    image: "/service.jpg",
    imageAlignment: "right",
  },
  {
    title: "تصميم تطبيقات الموبايل",
    description:
      "   نقوم في ماركتيف بإدارة حساباتك على مواقع التواصل الاجتماعي و إنشاء الحملات الإعلانية  في المنصات المختلفة  فهي تعتبر طريقة فعالة لجذب الجمهور المستهدف وزيادة المبيعات. نبتكر حملات إعلانية مستهدفة تستند إلى متطلبات واهتمامات الجمهور المستهدف والمنصة المستهدفة من منصات مواقع التواصل الاجتماعي مثل  سنابشات Snapchat  , فيسبوك Facebook , إنستغرام Instagram  ,تكتوك TikTok  و إكس X  وغيرها من المنصات . ",
    image: "/service.jpg",
    imageAlignment: "left",
  },
  {
    title: "تصميم مواقع ويب",
    description:
      "   نقوم في ماركتيف بإدارة حساباتك على مواقع التواصل الاجتماعي و إنشاء الحملات الإعلانية  في المنصات المختلفة  فهي تعتبر طريقة فعالة لجذب الجمهور المستهدف وزيادة المبيعات. نبتكر حملات إعلانية مستهدفة تستند إلى متطلبات واهتمامات الجمهور المستهدف والمنصة المستهدفة من منصات مواقع التواصل الاجتماعي مثل  سنابشات Snapchat  , فيسبوك Facebook , إنستغرام Instagram  ,تكتوك TikTok  و إكس X  وغيرها من المنصات . ",
    image: "/service.jpg",
    imageAlignment: "right",
  },
  {
    title: "تصاميم وبناء هوية تجارية",
    description:
      "   نقوم في ماركتيف بإدارة حساباتك على مواقع التواصل الاجتماعي و إنشاء الحملات الإعلانية  في المنصات المختلفة  فهي تعتبر طريقة فعالة لجذب الجمهور المستهدف وزيادة المبيعات. نبتكر حملات إعلانية مستهدفة تستند إلى متطلبات واهتمامات الجمهور المستهدف والمنصة المستهدفة من منصات مواقع التواصل الاجتماعي مثل  سنابشات Snapchat  , فيسبوك Facebook , إنستغرام Instagram  ,تكتوك TikTok  و إكس X  وغيرها من المنصات . ",
    image: "/service.jpg",
    imageAlignment: "left",
  },
];
