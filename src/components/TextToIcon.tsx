import {
  FaFacebook,
  FaTwitter,
  FaSnapchat,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTiktok,
  FaQuestion,
} from "react-icons/fa";

const TextToIcon = ({ text }: { text: string }) => {
  switch (text) {
    case "facebook":
      return <FaFacebook />;
    case "tweeter":
      return <FaTwitter />;
    case "snapchat":
      return <FaSnapchat />;
    case "instagram":
      return <FaInstagram />;
    case "linkedin":
      return <FaLinkedin />;
    case "whatsapp":
      return <FaWhatsapp />;
    case "tiktok":
      return <FaTiktok />;
    default:
      return <FaQuestion />;
  }
};

export default TextToIcon;
