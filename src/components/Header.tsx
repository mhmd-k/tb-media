import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { Button, Drawer } from "@material-tailwind/react";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "how-are-we", label: "من نحن" },
  { to: "/services", label: "خدماتنا" },
  { to: "/partners", label: "شركائنا" },
  { to: "/contact-us", label: "تواصل معنا" },
];

const socialLinks = [
  { to: "/", icon: <FaFacebook /> },
  { to: "/", icon: <FaTwitter /> },
  { to: "/", icon: <FaLinkedin /> },
];

function Header() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      {" "}
      <header className="rounded-xl fixed mt-2">
        <div className="container px-2 py-2 my-2 text-white flex justify-between items-center">
          {/* Logo */}
          <div className="w-10 rounded-lg overflow-hidden">
            <Link to="/">
              <img className="object-cover" src="/logo.jpg" alt="Logo" />
            </Link>
          </div>

          {/* large screens Links */}
          <ul className="pt-0 translate-x-0 bg-transparent gap-6 items-center font-semibold hidden md:flex">
            {links.map((link, index) => (
              <li key={index} className="p-4 md:p-0 text-left">
                <NavLink
                  to={link.to}
                  className={(e) =>
                    e.isActive
                      ? "text-white transition-all hover:text-white"
                      : "text-gray-500 md:text-black transition-all hover:text-white"
                  }
                  onClick={closeDrawer}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <ul className="hidden md:flex gap-4 items-center text-black text-lg">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="block p-1 transition-all hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>

          {/* Menu Button */}
          <button
            className="text-3xl transition-all text-white md:hidden hover:text-gray-500"
            onClick={openDrawer}
          >
            <BiMenuAltLeft />
          </button>
        </div>

        <div className="container pb-4 block md:hidden">
          {/* Social Links */}
          <ul className="flex gap-4 items-center justify-center text-white text-lg">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="block p-1 transition-all hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 bg-main"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="mb-6">
          <Button
            variant="text"
            color="blue-gray"
            onClick={closeDrawer}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <HiX />
          </Button>
        </div>

        <ul className="flex flex-col gap-6 items-center font-semibold">
          {links.map((link, index) => (
            <li key={index} className="p-4 md:p-0 text-left">
              <NavLink
                to={link.to}
                className={(e) =>
                  e.isActive
                    ? "text-white transition-all hover:text-white"
                    : "text-gray-500 md:text-black transition-all hover:text-white"
                }
                onClick={closeDrawer}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
}

export default Header;
