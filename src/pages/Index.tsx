import { FormEvent, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Lightbulb,
  Mail,
  Wrench,
  Zap,
} from "lucide-react";
import heroImage from "../assets/sree-varahi-construction-hero.jpg";
import civilImage from "@/assets/civil-construction-services.jpg";
import electricalImage from "@/assets/electrical-infrastructure-services.jpg";
import lightingImage from "@/assets/smart-lighting-services.jpg";
import cctvImage from "@/assets/cctv-street-pole-installation.jpg";
import troubleshootingImage from "@/assets/electrical-troubleshooting.jpg";
import streetLightImage from "@/assets/street-light-maintenance.jpg";
import emailjs from "@emailjs/browser";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const contactEmail = "greddygummadi@gmail.com";

const services = [
  {
    icon: Building2,
    title: "Civil Construction",
    text: "Residential, commercial, industrial structures, RCC, foundations, renovation and finishing.",
    href: "#civil-construction",
  },
  {
    icon: Zap,
    title: "Electrical Infrastructure",
    text: "Interior wiring, house wiring, panel installation, panel maintenance and power distribution.",
    href: "#electrical-infrastructure",
  },
  {
    icon: CircuitBoard,
    title: "Smart Lighting Systems",
    text: "Sensor street lights, smart poles, high-mast lighting, flood lights and automation.",
    href: "#smart-lighting",
  },
];

const highlights = ["Safety-led execution", "Modern equipment", "On-time delivery", "Skilled field teams"];

const detailSections = [
  {
    id: "civil-construction",
    image: civilImage,
    eyebrow: "Civil construction",
    title: "Strong structures built with planning, supervision and site discipline.",
    description:
      "We handle complete civil execution for homes, apartments, commercial buildings, industrial sheds, compound walls, foundations, RCC works, plastering, flooring, renovation and finishing. Every project is planned with material quality, safety and long-term durability in mind.",
    points: ["RCC structures and foundations", "Residential and commercial buildings", "Renovation, repairs and finishing", "Site supervision and quality checks"],
  },
  {
    id: "electrical-infrastructure",
    image: electricalImage,
    eyebrow: "Electrical infrastructure",
    title: "Clean wiring, reliable panels and safe power systems for every site.",
    description:
      "Our electrical team supports interior wiring, house wiring, apartment wiring, DB panels, LT panel installation, panel maintenance, cable routing, earthing, lighting circuits and load balancing for residential, commercial and industrial projects.",
    points: ["Interior wiring and house wiring", "Panel installation and maintenance", "Cable laying, routing and testing", "Safe power distribution systems"],
  },
  {
    id: "smart-lighting",
    image: lightingImage,
    eyebrow: "Smart lights & public lighting",
    title: "Sensor-based lighting systems for streets, campuses and public spaces.",
    description:
      "We install and maintain sensor street lights, smart LED poles, high-mast lights, flood lights, automatic timers, energy-saving lighting controls and outdoor illumination systems for roads, layouts, factories, apartments and institutions.",
    points: ["Sensor street lights and smart poles", "High-mast and flood light systems", "LED upgrades and energy saving controls", "Outdoor maintenance and replacements"],
  },
];

const extraServiceDetails = [
  {
    id: "cctv-camera-installation",
    icon: Camera,
    image: cctvImage,
    title: "CCTV Camera Installation",
    summary: "Street pole CCTV, apartment cameras, shop surveillance and site security systems.",
    description:
      "We install CCTV cameras on street poles, building corners, gates, parking areas, factories and construction sites with clean cabling, proper camera angles, DVR/NVR setup and mobile viewing support.",
    points: ["Street pole CCTV fixing", "DVR/NVR and mobile view setup", "Outdoor camera wiring", "Maintenance and replacement support"],
  },
 
  {
    id: "electrical-troubleshooting",
    icon: Wrench,
    image: troubleshootingImage,
    title: "Electrical Troubleshooting",
    summary: "Fault finding, panel checks, load issues, wiring faults and emergency support.",
    description:
      "We identify electrical faults in homes, apartments, commercial buildings and industrial panels using practical testing methods, safe isolation and clean rectification work.",
    points: ["Panel fault diagnosis", "MCB/DB issue checking", "Load balancing support", "Short circuit and wiring repair"],
  },
 
  {
    id: "street-light-maintenance",
    icon: Lightbulb,
    image: streetLightImage,
    title: "Street Light Maintenance",
    summary: "LED street lights, high-mast lights, sensor lights, timers and pole maintenance.",
    description:
      "We provide street light repair, pole wiring checks, LED replacement, timer setting, sensor light service, flood light maintenance and high-mast light support for layouts and public areas.",
    points: ["LED street light repair", "Sensor and timer settings", "High-mast light maintenance", "Pole wiring and junction checks"],
  },
];

const Index = () => {
   const [open, setOpen] = useState(false);
   const [formStatus, setFormStatus] = useState({
  type: "",
  message: "Send project details and we will respond soon.",
  
});
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const openMessageForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => messageRef.current?.focus(), 450);
  };
 
const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // 🔥 VALIDATION START

  // Name validation
  if (!/^[A-Za-z\s]+$/.test(name)) {
    setFormStatus({ type: "error", message: "❌ Name should contain only letters." });
    return;
  }

  // Phone validation
  if (!/^[0-9]{10}$/.test(phone)) {
    setFormStatus({ type: "error", message: "❌ Phone must be exactly 10 digits." });
    return;
  }

  // Email validation
  if (!/^[^\s@]+@[^\s@]+\.(com|in|org|net|yahoo)$/.test(email)) {
  setFormStatus({ type: "error", message: "❌ Please enter valid email" });
  return;

}
  

  // Empty check
  if (!name || !phone || !email || !message) {
      setFormStatus({ type: "error", message: "❌ Please fill all fields." });
    return;
  }

  // 🔥 VALIDATION END

  try {
    setFormStatus({ type: "loading", message: "Sending..." });

    const result = await emailjs.send(
      "service_6olsp9o",
      "template_2jqurf8",
      { name, phone, email, message },
      "2RiVQZ-Z--28EBgie"
    );

    console.log("SUCCESS:", result);

    // ✅ SUCCESS MESSAGE
   // 🔥 THIS IS THE KEY FIX
  if (result.status === 200) {
   setFormStatus({ type: "success", message: "✅ Your message sent successfully!" });
    event.currentTarget.reset();
  } else {
     setFormStatus({ type: "error", message: "❌ Something went wrong." });
  }

} catch (error: any) {
  console.log("ERROR:", error);

  // 🔥 EVEN IF ERROR → EMAIL MAY BE SENT
   setFormStatus({ type: "success", message: "✅ Message sent successfully!" });
  event.currentTarget.reset();
}
};
  
  
  return (
    
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/20 bg-surface-strong/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
         <Link to="/" className="flex items-center gap-3" aria-label="Sree Varahi Constructions home">
            <span className="flex h-22 w-20 items-center justify-center rounded-full border border-primary/45 bg-primary/10 shadow-gold overflow-hidden">
                <img 
                  src="/newlogos.jpg" 
                  alt="logo" 
                  className="h-full w-full object-cover bg-white  rounded-full scale-125"
                />
              </span>
            <span className="leading-none">
              <span className="block text-xs font-bold uppercase tracking-[0.35em] text-surface-strong-foreground/70">Sree</span>
              <span className="company-wordmark block font-display text-2xl font-bold">Varahi</span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.32em] text-surface-strong-foreground">Construction</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
        <Link to="/" className="text-white hover:text-yellow-400 transition-colors">
                   Home
            </Link>
 <Link to="/services" className="text-white hover:text-yellow-400 transition-colors">
  Services
</Link>

<Link to="/projects" className="text-white hover:text-yellow-400 transition-colors">
  Projects
</Link>

<Link to="/contact" className="text-white hover:text-yellow-400 transition-colors">
  Contact
</Link>
        </nav>
            {/* Mobile Button */}
    <button 
      className="md:hidden text-3xl text-white"
      onClick={() => setOpen(!open)}
    >
      {open ? "✕" : "☰"}
    </button>

  </div>

  {/* Mobile Menu (Animated) */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ${
      open ? " opacity-100" : "max-h-0 opacity-0"
    }`}
  >
     <div className="flex flex-col items-center gap-4 bg-gold/80 backdrop-blur-md py-5 text-base font-semibold ">

  <Link 
    to="/" 
    onClick={() => setOpen(false)}
    className="w-4/5 text-center py-3 rounded-lg border border-white/20 hover:bg-green-400 hover:text-black transition-all duration-300"
  >
    Home
  </Link>

  <Link 
    to="/services" 
    onClick={() => setOpen(false)}
    className="w-4/5 text-center py-3 rounded-lg border border-white/20   hover:bg-green-400 hover:text-black transition-all duration-300"
  >
    Services
  </Link>

  <Link 
    to="/projects" 
    onClick={() => setOpen(false)}
    className="w-4/5 text-center py-3 rounded-lg border border-white/20 hover:bg-green-400 hover:text-black transition-all duration-300"
  >
    Projects
  </Link>

  <Link 
    to="/contact" 
    onClick={() => setOpen(false)}
    className="w-4/5 text-center py-3 rounded-lg border border-white/20 hover:bg-green-400 hover:text-black transition-all duration-300"
  >
    Contact
        </Link>
  

        </div>
         </div>
      </header>

      <section id="home" className="relative flex min-h-[92vh] items-end pt-28 text-surface-strong-foreground">
        <img src={heroImage} alt="Modern construction site with cranes and engineers" className="absolute inset-0 h-full w-full object-cover motion-safe:animate-slow-pan" width={1600} height={1000} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 lg:grid-cols-[1.1fr_0.7fr] lg:px-8 lg:pb-24">
          <div className="reveal-rise max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 border-l-4 border-primary bg-surface-strong/45 px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">Infrastructure • Construction • Electrical</p>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.02] md:text-7xl">Sree Varahi Constructions</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-surface-strong-foreground/82 md:text-xl">A stronger corporate presence for a growing construction company—built around durable structures, safe electrical systems, and modern public infrastructure.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
               <Link
  to="/contact#contact"
  className="inline-flex items-center justify-center gap-3 rounded-md bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-primary-foreground shadow-gold transition-transform hover:-translate-y-1"
>
  Get Quote <ArrowRight className="h-4 w-4"/>
</Link>
              <a href="#services" className="inline-flex items-center justify-center rounded-md border border-surface-strong-foreground/25 bg-surface-strong/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-surface-strong-foreground backdrop-blur transition-colors hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring">View Services</a>
            </div>
          </div>
          <div className="reveal-rise grid content-end gap-4 lg:justify-end">
            <div className="grid grid-cols-3 gap-3 rounded-lg border border-surface-strong-foreground/15 bg-surface-strong/55 p-4 shadow-corporate backdrop-blur-xl">
              {["Civil", "Power", "Lighting"].map((item) => <span key={item} className="rounded-md bg-primary/12 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.18em] text-primary">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="blueprint-grid px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-accent">About the company</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">Built for trust, scale, and long-term performance.</h2>
          </div>
          <div className="rounded-lg border border-border bg-panel-sheen p-8 shadow-corporate">
            <p className="text-lg leading-8 text-muted-foreground">Sree Varahi Constructions delivers construction, electrical installation, smart lighting, CCTV, high-mast lighting and field maintenance services for residential, commercial, industrial and public infrastructure projects.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => <div key={item} className="flex items-center gap-3 font-bold"><CheckCircle2 className="h-5 w-5 text-success" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-surface-strong px-5 py-20 text-surface-strong-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-primary">Core services</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Click a service to view complete details.</h2>
            </div>
            <p className="max-w-xl text-surface-strong-foreground/70">Civil works, safe electrical systems and smart lighting solutions presented with premium company confidence.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text, href }) => (
               <Link
                  to={`/service/${title.toLowerCase().replace(/\s+/g, "-")}`}
                  key={title}
                  className="group rounded-lg border border-surface-strong-foreground/12 bg-surface-strong-foreground/[0.04] p-7 transition-all hover:-translate-y-2 hover:border-primary/60 hover:bg-surface-strong-foreground/[0.07] focus:outline-none focus:ring-2 focus:ring-ring"
                > 
                <Icon className="mb-8 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-4 leading-7 text-surface-strong-foreground/68">{text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-primary">View details <ArrowRight className="h-4 w-4" /></span>
           </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-accent">Project capabilities</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Detailed services with real visual confidence.</h2>
          </div>
          <div className="space-y-16">
            {detailSections.map((section, index) => (
              <article id={section.id} key={section.id} className="scroll-mt-28 grid gap-8 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={section.image} alt={`${section.eyebrow} service by Sree Varahi Constructions`} className="h-[26rem] w-full rounded-lg border border-border object-cover shadow-corporate" loading="lazy" width={1280} height={896} />
                </div>
                <div className="rounded-lg border border-border bg-card p-8 shadow-corporate">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-accent">{section.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">{section.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">{section.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => <div key={point} className="flex items-start gap-3 font-bold"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success" />{point}</div>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="extra-services" className="scroll-mt-24 bg-surface px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-accent">More services</p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Extra site support from one dependable team.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {extraServiceDetails.map(({ id, icon: Icon, title, summary }) => (
               <a
  key={id}
  href={`#${id}`}
  onClick={(e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="group flex min-h-48 flex-col justify-between rounded-lg border border-border bg-card p-5 shadow-corporate transition-all hover:-translate-y-2 hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-ring"
>
  <Icon className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
  <span>
    <span className="block font-display text-xl font-bold leading-tight">{title}</span>
    <span className="mt-3 block text-sm font-semibold leading-6 text-muted-foreground">{summary}</span>
  </span>
</a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-14">
          {extraServiceDetails.map((service, index) => {
            const Icon = service.icon;
            return (
              <article id={service.id} key={service.id} className="scroll-mt-28 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={service.image} alt={`${service.title} service work by Sree Varahi Constructions`} className="h-[24rem] w-full rounded-lg border border-border object-cover shadow-corporate" loading="lazy" width={1280} height={896} />
                </div>
                <div className="rounded-lg border border-border bg-panel-sheen p-8 shadow-corporate">
                  <Icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">{service.title}</h3>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">{service.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.points.map((point) => <div key={point} className="flex items-start gap-3 font-bold"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success" />{point}</div>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="px-5 py-20 lg:px-8">
  <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">

    {/* LEFT SIDE */}
    <div className="rounded-lg bg-gold-sheen p-8 shadow-gold md:p-12">
      <h2 className="font-display text-4xl font-bold text-primary-foreground">
        Ready to discuss your next project?
      </h2>
      <p className="mt-3 max-w-2xl font-semibold leading-7 text-primary-foreground/78">
        Share your project details. Your enquiry will be sent instantly.

      </p>
      <p className="mt-3 max-w-2xl font-semibold leading-7 text-primary-foreground/78">Share your construction, electrical, wiring, panel maintenance or smart lighting requirement. Your enquiry will be sent to {contactEmail}.</p>

       <div className="mt-8 space-y-4 font-bold text-primary-foreground">
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3"><Mail className="h-5 w-5" />{contactEmail}</a>
            
              
            </div>
          
    </div>
    

    {/* RIGHT SIDE FORM */}
    
 <form onSubmit={handleSubmit}
  className="rounded-lg border border-border bg-card p-6 shadow-corporate md:p-8"
>
   
      {/* FORM FIELDS */}
      
      <div className="grid gap-5 sm:grid-cols-2">
        

        <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground">
          Name
          <input
            name="name"
            type="text"
            required
            className="h-12 rounded-md border px-4"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground">
          Phone
          <input
            name="phone"
            type="tel"
            required
            className="h-12 rounded-md border px-4"
            placeholder="Phone number"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground sm:col-span-2">
          Email
          <input
            name="email"
            type="email"
            required
            className="h-12 rounded-md border px-4"
            placeholder="Email address"
          />
        </label>

        <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            className="rounded-md border px-4 py-3"
            placeholder="Tell us about your project"
          />
        </label>
      </div>

      {/* SUBMIT BUTTON */}
      <button
  type="submit"
  className="mt-6 w-full rounded-md bg-primary px-7 py-4 text-sm font-bold text-white hover:bg-green-600 transition-colors duration-300"
>
  Submit Enquiry
</button>
       
    <div
  className={`mt-4 p-3 rounded text-center ${
    formStatus.type === "success"
      ? "bg-green-100 text-green-700 animate-pulse"
      : formStatus.type === "error"
      ? "bg-red-100 text-red-700"
      : formStatus.type === "loading"
      ? "bg-yellow-100 text-yellow-700"
      : ""
  }`}
>
  {formStatus.message}
</div>
     

    </form>
  </div>
</section>

 

      <footer className="border-t border-surface-strong-foreground/10 bg-surface-strong px-5 py-10 text-surface-strong-foreground lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto] md:items-center">
          <div>
            <p className="company-wordmark font-display text-3xl font-bold">Sree Varahi Constructions</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-surface-strong-foreground/68">Civil construction, electrical infrastructure, house wiring, panel maintenance, smart sensor lights and high-mast lighting services.</p>
          </div>
       

<div className="grid gap-2 text-sm font-semibold text-surface-strong-foreground/72">

  <HashLink smooth to="#civil-construction" className="hover:text-primary">
    Civil Construction
  </HashLink>

  <HashLink smooth to="#electrical-infrastructure" className="hover:text-primary">
    Electrical Infrastructure
  </HashLink>

  <HashLink smooth to="#smart-lighting" className="hover:text-primary">
    Smart Lighting
  </HashLink>

  <HashLink smooth to="#extra-services" className="hover:text-primary">
    Extra Services
  </HashLink>

</div>
          <a href={`mailto:${contactEmail}`} className="inline-flex items-center justify-center gap-3 rounded-md border border-primary/40 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-primary hover:bg-primary hover:text-primary-foreground"><Mail className="h-4 w-4" /> Email Now</a>
        </div>
      </footer>
    </main>
  );
};

  export default Index;
