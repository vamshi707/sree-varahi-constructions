import { Link } from "react-router-dom";
import civilImage from "@/assets/civil-construction-services.jpg";
import electricalImage from "@/assets/electrical-infrastructure-services.jpg";
import lightingImage from "@/assets/smart-lighting-services.jpg";
import logo from "@/assets/newlogos.jpg"; // 👈 your logo

const services = [
  {
    id: "civil-construction",
    title: "Civil Construction",
    image: civilImage,
    desc: "Residential, commercial, industrial structures, RCC, foundations and finishing.",
  },
  {
    id: "electrical-infrastructure",
    title: "Electrical Infrastructure",
    image: electricalImage,
    desc: "Interior wiring, panels, distribution systems and maintenance.",
  },
  {
    id: "smart-lighting",
    title: "Smart Lighting Systems",
    image: lightingImage,
    desc: "Sensor lights, smart poles, high-mast lighting and automation.",
  },
];

const ServicesPage = () => {
  return (
    <main className="relative min-h-screen bg-background text-foreground pt-28 px-5 overflow-hidden">

      {/* 🔥 BACKGROUND LOGO */}
      <img
    src={logo}
    alt="logo"
    className="absolute top-2/2 left-1/2 w-100 opacity-15 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
  />
     

      {/* Title */}
    
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Services
        
      </h1>
      

      {/* Services Grid */}
      <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border p-5 shadow-md hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-52 w-full object-cover rounded-md"
            />

            <h2 className="mt-4 text-2xl font-bold">
              {service.title}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {service.desc}
            </p>

            <Link
              to={`/service/${service.id}`}
              className="inline-block mt-4 text-primary font-bold hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

   <section className="relative mt-20 max-w-5xl mx-auto text-center px-4 overflow-hidden">

  {/* ✅ CENTER BACKGROUND LOGO */}
  <img
    src={logo}
    alt="logo"
    className="absolute top-1/2 left-1/2 w-96 opacity-15 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-6">
      About Our Company
    </h2>

    <p className="text-gray-600 leading-relaxed text-lg">
      We are a trusted engineering and infrastructure company delivering 
      high-quality civil, electrical, and smart lighting solutions. With a 
      strong commitment to innovation, safety, and excellence, we provide 
      reliable services tailored to modern industry standards.
    </p>

    <p className="text-gray-500 mt-4 leading-relaxed">
      Our team of experienced professionals ensures every project is executed 
      with precision, efficiency, and long-term durability.
    </p>

    {/* Highlights */}
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div className="bg-gray-100 p-4 rounded-lg">🏗️ Quality Work</div>
      <div className="bg-gray-100 p-4 rounded-lg">⚡ Expert Team</div>
      <div className="bg-gray-100 p-4 rounded-lg">💡 Innovation</div>
      <div className="bg-gray-100 p-4 rounded-lg">🛡️ Safety First</div>
    </div>
  </div>

</section>

      <br /><br />

    </main>
  );
};

export default ServicesPage;