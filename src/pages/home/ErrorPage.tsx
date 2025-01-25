import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <Typography
        variant="h1"
        className="mb-4"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        حدث خطأ ما
      </Typography>
      <Link className="bg-purple-500 py-2 px-6 rounded-sm" to="/">
        عودة للصفحة الرئيسية
      </Link>
    </div>
  );
}

export default ErrorPage;
