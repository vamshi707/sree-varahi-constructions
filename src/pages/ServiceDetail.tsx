import { useParams, Link } from "react-router-dom";
import civilImg from "@/assets/civil-construction-services.jpg";
import constraction2 from "@/assets/constraction2.jpg";
import chart2 from "@/assets/chart2.jpg";
import cons2 from "@/assets/cons2.jpg";
import chart1 from  "@/assets/chart1.jpg";
import ele1 from "@/assets/ele1.jpg";
import ele3 from "@/assets/ele3.jpg";
import panel1 from "@/assets/panel1.jpg";
import elemain1 from "@/assets/elemain1.jpg";
import bulb1 from "@/assets/bulb1.jpg";
import hymaxlight from "@/assets/hymaxlight.jpg";
import cc2 from "@/assets/cc2.jpg";
import sol1 from "@/assets/sol1.jpg";
import cctvs from "@/assets/cctvs.jpg";
import logo from "@/assets/newlogos.jpg";



const ServiceDetail = () => {
  const { id } = useParams();

  // 🟢 CIVIL PAGE
  if (id === "civil-construction") {
    
    return (
      
      <main className="pt-28 px-5">
    
        
        <Link to="/services" className="fixed top-28 left-4 bg-primary text-white px-6 py-3 rounded">
          ← Back to services
        </Link>

        <h1 className="text-4xl font-bold mt-10 text-">Civil Construction</h1>

 <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">

  {/* LEFT CONTENT */}
  <div>
      <img
    src={logo}
    alt="logo"
    className="absolute top-1/2 left-2/2 w-100 opacity-15 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
  />
    <h4 className="text-2xl md:text-2xl font-bold mb-4">
      Civil Construction Excellence
    </h4>

    <p className="text-gray-600 leading-relaxed">
      We deliver end-to-end civil construction solutions for residential,
      commercial, and industrial projects. Our approach integrates advanced
      engineering practices with premium-grade materials to ensure structural
      strength, durability, and long-term reliability.
    </p>

    <p className="mt-4 text-gray-500">
      From planning and design to execution and finishing, our team ensures
      precision, safety, and timely delivery. We follow strict quality control
      standards to exceed client expectations at every stage.
    </p>

    {/* FEATURES */}
    <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
      <div className="bg-gray-100 p-3 rounded-lg">🏗️ RCC Structures</div>
      <div className="bg-gray-100 p-3 rounded-lg">📐 Structural Design</div>
      <div className="bg-gray-100 p-3 rounded-lg">⏱️ On-Time Delivery</div>
      <div className="bg-gray-100 p-3 rounded-lg">🛡️ Safety Standards</div>
    </div>

    {/* STATS (MNC STYLE) */}
    <div className="mt-8 flex gap-8">
      <div>
        <h3 className="text-2xl font-bold text-primary">8+</h3>
        <p className="text-sm text-gray-500">Years Experience</p>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-primary">100%</h3>
        <p className="text-sm text-gray-500">Client Satisfaction</p>
      </div>
    </div>

    {/* BUTTON */}
    <Link
  to="/contact"
  className="mt-8 inline-block bg-gold text-black px-6 py-3 rounded-lg shadow hover:scale-105   transition"
>
  Get a Quote →
</Link>
     
    <br />
    
     
  </div>

  {/* RIGHT IMAGE SECTION */}
  <div className="grid grid-cols-2 gap-4">
    
    {/* MAIN IMAGE */}
    <div className="col-span-2 overflow-hidden rounded-2xl shadow-xl">
      <img
        src={chart2}
        alt="Construction Work"
        className="w-full h-[260px] object-cover hover:scale-110 transition duration-500"
      />
    </div>

    {/* SMALL IMAGE 1 */}
    <div className="overflow-hidden rounded-xl shadow-md">
      <img
        src={cons2}
        alt="Building Work"
        className="w-full h-[140px] object-cover hover:scale-110 transition"
      />
    </div>

    {/* SMALL IMAGE 2 */}
    <div className="overflow-hidden rounded-xl shadow-md">
      <img
        src={chart1}
        alt="Site Work"
        className="w-full h-[140px] object-cover hover:scale-110 transition"
      />
    </div>

  </div>

</div>
      </main>
    );
  }

  // ⚡ ELECTRICAL PAGE
  if (id === "electrical-infrastructure") {
    return (
      <main className="pt-28 px-5 bg-black text-white">
        <Link to="/services" className="fixed top-28 left-5 bg-yellow-500 text-black px-4 py-2 rounded">
          ← Back to services
        </Link>

        <h1 className="text-4xl font-bold mt-10 text-yellow-400">
          Electrical Infrastructure ⚡
        </h1>

        <img src={ele1} className="w-full h-80 object-cover rounded-xl mt-5 shadow-lg" />

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-gray-800 p-4 rounded"> ⚡ Wiring</div>
           
          <div className="bg-gray-800 p-4 rounded">⚡ Panels</div>
          
          <div className="bg-gray-800 p-4 rounded">⚡ Distribution</div>
          
          <div className="bg-gray-800 p-4 rounded">⚡ Maintenance</div>
        </div>
        <h2 className="text-3xl font-bold text-white mt-10">
  Electrical Wiring & Installations
</h2>
<div> 
<p className="text-gray-300 mt-4 leading-relaxed">
  We specialize in high-quality electrical wiring solutions for homes, 
  offices, and industrial spaces. Our team ensures safe, efficient, and 
  long-lasting wiring systems using modern tools and industry standards.
</p>

<p className="text-gray-400 mt-3 leading-relaxed">
  From complete electrical installations to panel board setup, power 
  distribution, and routine maintenance, we deliver reliable services 
  tailored to your needs. Safety, performance, and customer satisfaction 
  are our top priorities.
</p>
</div>
<div><p className="mt-4 text-yellow-400 font-semibold">
  ✔ Safe • ✔ Reliable • ✔ Professional Service
</p></div>

    {/* SMALL IMAGE 1 */}
 
 <div className="grid grid-cols-2 gap-4 mt-6">

  {/* LEFT IMAGE */}
  
  <div className="overflow-hidden rounded-xl shadow-md">
    <img
      src={ele3}
      alt="Building Work"
      className="w-full h-[220px] object-cover hover:scale-110 transition duration-300"
    />
  </div>

  {/* RIGHT IMAGE */}
  <div className="overflow-hidden rounded-xl shadow-md">
    <img
      src={panel1}
      alt="Site Work"
      className="w-full h-[220px] object-cover hover:scale-110 transition duration-300"
    />
 
</div>
  <Link
  to="/contact"
  className=" mt-8 inline-block bg-gold w-40 text-black px-6 py-2 rounded-lg shadow hover:scale-105 transition"
>
  Get a Quote →
</Link>
     
<br />
 
</div>
 <section className="mt-16 text-center flex flex-col items-center px-4">

  <h2 className="text-3xl md:text-4xl font-bold text-white">
    ⚡ Electrical Maintenance Services
  </h2>

  <img
    src={elemain1}
    alt="Maintenance"
    className="w-full max-w-xl h-80 object-cover rounded-xl mt-6 shadow-lg"
  />

  <p className="text-gray-300 mt-6 max-w-2xl leading-relaxed text-lg">
    We provide comprehensive electrical maintenance services to ensure your 
    systems operate safely, efficiently, and without interruption. Our team 
    conducts regular inspections, identifies potential issues early, and 
    performs timely repairs to avoid costly downtime.
  </p>

  <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
    From residential buildings to large-scale industrial facilities, we maintain 
    wiring systems, electrical panels, and power distribution networks with 
    precision. Our services are designed to improve system performance, extend 
    equipment lifespan, and ensure complete safety compliance.
  </p>

  {/* HIGHLIGHT POINTS */}
  <div className="mt-6 text-yellow-400 font-semibold">
    ✔ Safe Operations &nbsp; • &nbsp; ✔ Expert Technicians &nbsp; • &nbsp; ✔ 24/7 Support
  </div>

  {/* SERVICES GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">

    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition">
      ⚡ Preventive Maintenance
    </div>

    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition">
      ⚡ Fault Detection
    </div>

    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition">
      ⚡ Panel Servicing
    </div>

    <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition">
      ⚡ Emergency Repairs
    </div>

  </div>

  {/* EXTRA SMALL NOTE */}
  <p className="text-gray-500 mt-6 max-w-xl text-sm">
    Our maintenance services are tailored to meet industry standards and ensure 
    long-term reliability for all electrical systems.
  </p>

</section>
      </main>
      
    );
  }

  // 💡 LIGHTING PAGE
 if (id === "smart-lighting") {
  return (
    <main className="pt-28 px-5 bg-gradient-to-br from-blue-950 via-black to-gray-900 text-white scroll-smooth">

      {/* BACK BUTTON */}
      <Link 
        to="/services" 
        className="fixed top-28 left-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow hover:scale-105 transition"
      >
        ← Back to services
      </Link>

      {/* HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold mt-10 animate-fade-in">
          💡 Smart Lighting Solutions
        </h1>

        <p className="mt-4 text-gray-300 text-lg animate-fade-in delay-100">
          Transforming spaces with intelligent, energy-efficient, and high-performance lighting systems.
        </p>

    <img 
  src={bulb1}
  alt="Smart Lighting"
  className="bulb-glow mx-auto mt-8 rounded-xl w-full max-w-3xl shadow-xl"
/>

      </section>

      {/* CONTENT SECTION */}
      <section className="mt-16 text-center max-w-3xl mx-auto px-4 animate-fade-in delay-200">

        <p className="text-gray-300 leading-relaxed text-lg">
          We specialize in advanced lighting solutions tailored for residential, commercial, 
          and industrial environments. Our expertise ensures optimal illumination, energy efficiency, 
          and long-lasting performance.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          From smart automation systems to large-scale lighting projects, we deliver reliable 
          installations that enhance safety, visibility, and aesthetics.
        </p>

      </section>

      {/* SERVICES GRID */}
      <section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">

        <div className="bg-gray-800 p-5 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
          💡 Hy-Max and Flood Lights
        </div>

        <div className="bg-gray-800 p-5 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
          🌃 Street Lights
        </div>

        <div className="bg-gray-800 p-5 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
          🔦 Solar Lights
        </div>

        <div className="bg-gray-800 p-5 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300">
          🎥 CCTV Integration
        </div>

      </section>
      <section className="mt-20 max-w-6xl mx-auto px-4">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT IMAGE */}
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src={hymaxlight}   // add your image
        alt="Hy-Max Lighting"
        className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>

      <h2 className="text-2xl md:text-3xl font-bold text-white">
        💡 Hy-Max High Mast Lighting
      </h2>

      <p className="text-gray-300 mt-4 leading-relaxed">
        Hy-Max High Mast Lighting systems are designed to illuminate large outdoor 
        areas such as highways, industrial zones, airports, and stadiums. These 
        high-performance lighting solutions provide uniform brightness with minimal 
        energy consumption.
      </p>

      <p className="text-gray-400 mt-4 leading-relaxed">
        We specialize in the installation and maintenance of high mast lighting 
        systems, ensuring durability, safety, and optimal performance even in 
        harsh environmental conditions.
      </p>

     

    </div>

  </div>

</section>
<section className="mt-20 max-w-6xl mx-auto px-4">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT IMAGE */}
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src={cc2}   // add your street light image
        alt="Street Lighting"
        className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>

      <h2 className="text-2xl md:text-3xl font-bold text-white">
        🌃 Street Lighting Solutions
      </h2>

      <p className="text-gray-300 mt-4 leading-relaxed">
        Our street lighting solutions are designed to provide efficient and 
        reliable illumination for roads, highways, residential areas, and public 
        spaces. We ensure optimal visibility, safety, and energy efficiency using 
        advanced LED lighting systems.
      </p>

      <p className="text-gray-400 mt-4 leading-relaxed">
        We specialize in installation, maintenance, and upgrading of street lighting 
        infrastructure. Our systems are built to withstand harsh weather conditions 
        while delivering consistent performance and long service life.
      </p>

      
     

    </div>

  </div>
  <section className="mt-20 max-w-6xl mx-auto px-4">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div>

      <h2 className="text-2xl md:text-3xl font-bold text-white">
        ☀️ Solar Pole Lighting Systems
      </h2>

      <p className="text-gray-300 mt-4 leading-relaxed">
        Our solar pole lighting solutions provide sustainable and energy-efficient 
        illumination for streets, rural areas, highways, and industrial zones. 
        These systems operate independently using solar energy, reducing electricity 
        costs and environmental impact.
      </p>

      <p className="text-gray-400 mt-4 leading-relaxed">
        We specialize in designing and installing complete solar lighting systems 
        including solar panels, battery storage, LED fixtures, and smart controllers. 
        Our solutions ensure reliable performance even in remote locations.
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-2 gap-3 mt-6 text-sm">

        <div className="bg-gray-800 p-3 rounded-lg">
          🌞 Solar Powered
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          🔋 Battery Backup
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          💡 Automatic ON/OFF
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          🌱 Eco-Friendly
        </div>

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src={sol1}   // add your solar image
        alt="Solar Pole Lighting"
        className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>

</section>

</section>
<section className="mt-20 max-w-6xl mx-auto px-4">

  <div className="grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT IMAGE */}
    <div className="overflow-hidden rounded-xl shadow-lg">
      <img
        src={cctvs}   // add your CCTV image
        alt="CCTV Installation"
        className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>

      <h2 className="text-2xl md:text-3xl font-bold text-white">
        🎥 CCTV Installation on Poles
      </h2>

      <p className="text-gray-300 mt-4 leading-relaxed">
        We provide professional CCTV installation on poles for enhanced outdoor 
        security and surveillance. These systems are ideal for streets, highways, 
        industrial areas, and public spaces, ensuring continuous monitoring and safety.
      </p>

      <p className="text-gray-400 mt-4 leading-relaxed">
        Our solutions include high-definition cameras, night vision capabilities, 
        and remote monitoring systems. We ensure proper placement and secure mounting 
        for maximum coverage and reliability.
      </p>

      {/* FEATURES */}
      <div className="grid grid-cols-2 gap-3 mt-6 text-sm">

        <div className="bg-gray-800 p-3 rounded-lg">
          🎥 HD Surveillance
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          🌙 Night Vision
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          📡 Remote Monitoring
        </div>

        <div className="bg-gray-800 p-3 rounded-lg">
          🔒 Enhanced Security
        </div>

      </div>

    </div>

  </div>

</section>

      {/* EXTRA CONTENT */}
      <section className="mt-16 text-center max-w-3xl mx-auto px-4 animate-fade-in delay-300">

        <h2 className="text-2xl md:text-3xl font-semibold">
          Industrial & Large-Scale Lighting
        </h2>

        <p className="text-gray-300 mt-4 leading-relaxed">
          We handle large-scale industrial lighting projects with precision and expertise. 
          Our team ensures proper planning, installation, and maintenance of lighting systems 
          for factories, warehouses, highways, and public infrastructure.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          In addition, we provide integrated solutions combining lighting systems with CCTV 
          installations to enhance security and monitoring capabilities.
        </p>

      </section>

      {/* CTA */}
      <div className="text-center mt-16 mb-10">
        <Link 
          to="/contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition font-semibold"
        >
          Get a Quote →
        </Link>
      </div>

    </main>
    );
  }
};

export default ServiceDetail; 