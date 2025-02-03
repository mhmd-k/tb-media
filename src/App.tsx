import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
