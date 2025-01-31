import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/home/ErrorPage";
import Home from "./pages/home/Home";
import HowAreWe from "./pages/HowAreWe";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import PartnersPage from "./pages/PartnersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/how-are-we",
        element: <HowAreWe />,
      },
      {
        path: "/contact-us",
        element: (
          <main className="pt-5">
            <ContactPage />
          </main>
        ),
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/partners",
        element: <PartnersPage />,
      },
    ],
  },
]);
