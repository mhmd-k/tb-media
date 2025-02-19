import { socialLinks } from "../data/data";

function Footer() {
  return (
    <footer className="p-2">
      <div className="container mx-auto">
        <div className="flex mb-8 justify-center items-center">
          <div className="w-32">
            <img
              src="/logo-transparent-bg.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-center flex-1 max-w-[300px]">
            TB Media فريق متكامل يعمل على تسويق فعال لتحقيق نجاح نشاطك التجاري
            والوصول به إلى آفاق جديدة.
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
