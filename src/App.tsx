import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from "./pages/home/ErrorPage";
import HowAreWe from "./pages/HowAreWe";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";

const router = createBrowserRouter([
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
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
