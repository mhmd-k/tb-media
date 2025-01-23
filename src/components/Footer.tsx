import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  { to: "", icon: <FaTwitter /> },
  { to: "", icon: <FaTiktok /> },
  { to: "", icon: <FaFacebook /> },
  { to: "", icon: <FaInstagram /> },
  { to: "", icon: <FaSnapchat /> },
];

function Footer() {
  return (
    <footer className="p-2">
      <div className="container mx-auto">
        <div className="flex mb-8 justify-center items-center">
          <div className="w-32">
            <img
              src="/WhatsApp Image 2025-01-04 at 3.15.53 PM.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-center flex-1 max-w-[300px]">
            ماركتيف شركة سعودية رائدة في خدمات الأعمال، تأسست في المملكة العربية
            السعودية، مدينة الرياض حي الرمال
          </p>
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
      </div>
    </footer>
  );
}

export default Footer;
