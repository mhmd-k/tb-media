import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { BsWhatsapp } from "react-icons/bs";

function Layout() {
  return (
    <>
      <ScrollToTop>
        <Header />
        <Outlet />
        <a
          href="https://wa.me/+966504421904"
          target="_blank"
          className="fixed z-10 right-20 bottom-10 flex justify-center items-center w-14 h-14 text-2xl bg-green-500 rounded-full shadow-lg shadow-green-500/50 transition-all ease-in-out hover:scale-105"
        >
          <BsWhatsapp />
        </a>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default Layout;
