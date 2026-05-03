import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

 

const Layout = () => {
  const [open, setOpen] = useState(false);



  return (
    <>
      {/* HEADER */}
   <header className="fixed inset-x-0 top-0 z-50 bg-black/90 backdrop-blur-md text-white py-2 shadow-md">
   <Link to="/" className="flex items-center gap-3" aria-label="Sree Varahi Constructions home"></Link>

  <div className="mx-auto flex max-w-7xl items-center justify-between px-5">

    {/* Logo */}
    <Link to="/" className="flex items-center gap-2">
               <span className="flex h-22 w-20 items-center justify-center rounded-full border border-primary/45 bg-primary/10 shadow-gold overflow-hidden">
        <img 
          src="/newlogos.jpg" 
          alt="logo" 
          className="h-full w-full object-contain bg-white  rounded-full scale-125"
        />
      </span>

         <span className="leading-none">
              <span className="block text-xs font-bold uppercase tracking-[0.35em] text-surface-strong-foreground/70">Sree</span>
              <span className="company-wordmark block font-display text-2xl font-bold">Varahi</span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.32em] text-surface-strong-foreground">Construction</span>
            </span>
    </Link>

    {/* Desktop Menu */}
    <nav className="hidden md:flex gap-6 text-sm font-semibold">
      <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
      <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
      <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
      <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
    </nav>

    {/* Mobile Button */}
    <button 
      className="md:hidden text-3xl"
      onClick={() => setOpen(!open)}
    >
      {open ? "✕" : "☰"}
    </button>

  </div>

  {/* Animated Mobile Menu */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
      open ? "  opacity-100" : "max-h-0 opacity-0"
    }`}
  >
         <div className="flex flex-col items-center gap-4 bg-gold/80 backdrop-blur-md py-5 text-base font-semibold text-black">

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

      {/* CONTENT */}
      <div className="pt-16">
        <Outlet />
      </div>
      {/* 🔥 FLOATING BUTTON */}
<div className="fixed bottom-5 right-5 z-50 group">
  <a
  href="https://wa.me/918328131435"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-7 right-6 z-50 flex items-center gap-2 
  bg-green-500 text-white px-4 py-3 rounded-full shadow-lg 
  hover:bg-green-600 transition-all duration-300 hover:scale-105"
>
  {/* Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-7"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.94 11.94 0 0012 .01C5.37.01.01 5.37.01 12c0 2.11.55 4.16 1.6 5.97L0 24l6.2-1.63A11.93 11.93 0 0012 23.99c6.63 0 11.99-5.36 11.99-11.99 0-3.2-1.25-6.21-3.47-8.52zM12 21.5c-1.88 0-3.73-.5-5.36-1.45l-.38-.22-3.68.97.98-3.58-.25-.37A9.44 9.44 0 012.5 12c0-5.24 4.26-9.5 9.5-9.5S21.5 6.76 21.5 12 17.24 21.5 12 21.5zm5.38-7.13c-.3-.15-1.78-.88-2.06-.98-.28-.1-.49-.15-.7.15-.2.3-.8.98-.98 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.7-1.68-.96-2.3-.25-.6-.5-.52-.7-.53h-.6c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.44.25-.7.25-1.3.18-1.44-.08-.13-.28-.2-.58-.35z"/>
  </svg>

  <span className="hidden md:block font-semibold">Chat</span>
</a>
</div>

      {/* FOOTER */}
      <footer className="border-t border-surface-strong-foreground/10 bg-surface-strong px-5 py-10 text-surface-strong-foreground lg:px-8">
         <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto_auto] md:items-start">
  
  {/* COMPANY INFO */}
  <div>
    <p className="font-bold text-2xl text-gold">Sree Varahi Constructions</p>
    <p className="mt-2 text-sm">
      Civil construction, electrical infrastructure, house wiring, panel maintenance, smart lighting services.
    </p>
  </div>
   
   {/* HERO SECTION */}
<div className="text-center py-20">
  <h1 className="text-5xl font-extrabold">
    Powering Infrastructure with Precision ⚡
  </h1>

  <p className="text-slate-400 mt-4 text-lg">
    100% client satifsfaction • Electrical • Civil • Smart Lighting
  </p>

  <div className="mt-8 flex justify-center gap-4">
    <Link
      to="/contact#contact"
      className="bg-blue-600 px-6 py-3 rounded-lg hover:scale-105 transition"
    >
      Get a Quote
    </Link>

    <a
      href="tel:+918328131435"
      className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
    >
      Call Now
    </a>
  </div>
</div>
  {/* CONTACT INFO */}
   <div className="grid gap-3 text-sm">

  <p className="font-semibold mb-2 text-lg">Contact</p>

  {/* ADDRESS */}
  <p className="leading-relaxed">
    📍 
    <a 
      href="https://maps.app.goo.gl/NESbQdfF8tcP28hR8?g_st=aw" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:text-primary underline"
    >
      H.No: 2-3-184/2B, Hanuman Colony <br />
      Opp to Old Bus Stand, Narayankhed <br />
      District: Sangareddy - 502286
    </a>
  </p>

  {/* PHONE */}
  <p>
    📞 
    <a 
      href="tel:+918328131435" 
      className="hover:text-primary"
    >
      +91 8328131435
    </a>
  </p>
  <h3>
  <a 
    href="mailto:greddygummadi@gmail.com"
    className="hover:text-primary"
  >
    📩 greddygummadi@gmail.com
  </a>
</h3>

  {/* EMAIL */}
  <p>
    📧 
    <a 
      href="mailto:info@sreevarahi.com" 
      className="hover:text-primary"
    >
      info@sreevarahi.com
    </a>
  </p>

</div>
 
  {/* WORKING HOURS (OPTIONAL) */}
  

</div>
      </footer>
    </>
  );
};

export default Layout;