import ServiceCard from "../components/ServiceCard";
import { extendedServices } from "../data/data";

function ServicesPage() {
  return (
    <div className="w-4/5 pt-36 mx-auto">
      {extendedServices.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}

export default ServicesPage;
