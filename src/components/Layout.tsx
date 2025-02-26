import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { BsWhatsapp } from "react-icons/bs";
import { phoneNumber } from "../data/data";

function Layout() {
  return (
    <>
      <ScrollToTop>
        <Header />
        <Outlet />
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          className="fixed z-10 right-5 bottom-5 md:right-20 md:bottom-10 flex justify-center items-center w-14 h-14 text-2xl bg-green-500 rounded-full shadow-lg shadow-green-500/50 transition-all ease-in-out hover:scale-105"
        >
          <BsWhatsapp />
        </a>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default Layout;
