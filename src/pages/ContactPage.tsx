  import { useState, FormEvent, useRef } from "react";
  import { Mail, MapPin, Phone } from "lucide-react";
  import emailjs from "@emailjs/browser";
  import heroImage from "@/assets/contectimg.jpg";

  const contactEmail = "vamshivmc143@gmail.com";

  const ContactPage = () => {
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

      // ✅ Prevent multiple clicks
      if (formStatus.type === "loading") return;

      const form = event.currentTarget;
      const formData = new FormData(form);

      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();

      // 🔥 VALIDATION
      if (!/^[A-Za-z\s]+$/.test(name)) {
        setFormStatus({ type: "error", message: "❌ Name should contain only letters." });
        return;
      }

      if (!/^[0-9]{10}$/.test(phone)) {
        setFormStatus({ type: "error", message: "❌ Phone must be exactly 10 digits." });
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.(com|in|org|net|yahoo)$/.test(email)) {
        setFormStatus({ type: "error", message: "❌ Please enter valid email" });
        return;
      }

      if (!name || !phone || !email || !message) {
        setFormStatus({ type: "error", message: "❌ Please fill all fields." });
        return;
      }

      try {
        // ⚡ Loading message
        setFormStatus({ type: "loading", message: "⚡ Sending..." });

        console.log("SERVICE:", import.meta.env.VITE_EMAILJS_SERVICE);
console.log("TEMPLATE:", import.meta.env.VITE_EMAILJS_TEMPLATE);
console.log("KEY:", import.meta.env.VITE_EMAILJS_PUBLIC);


      const result = await emailjs.send(
       import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
    {
      
      from_name: name,
      phone: phone,
      from_email: email,
      message: message,
      reply_to: email
    },
      import.meta.env.VITE_EMAILJS_PUBLIC
  );
        console.log("SUCCESS:", result);

        if (result.status === 200) {
          setFormStatus({
            type: "success",
            message: "✅ Your message sent successfully!",
          });

          form.reset();

          setTimeout(() => {
            setFormStatus({ type: "", message: "" });
          }, 3000);
        } else {
          setFormStatus({
            type: "error",
            message: "❌ Something went wrong.",
          });
        }
      } catch (error: any) {
        console.log("ERROR:", error);

        // ❌ FIXED (no fake success)
        setFormStatus({
          type: "error",
          message: "❌ Failed to send. Try again.",
        });
      }
    };

    return (
      <section id="contact" className="px-5 py-20 lg:px-8">

        {/* HERO */}
        <section className="relative w-full pt-33 pb-22 text-white overflow-hidden">
          <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Sree Varahi Constructions
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg">
              Share your project details and our team will respond quickly.
            </p>
          </div>
        </section>

        <br />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">

        <div  className="rounded-lg bg-gold-sheen p-8 shadow-gold md:p-12">
    <h2 className="text-4xl font-bold text-black">
      Ready to discuss your next project?
    </h2>

    <p className="mt-4 text-black/80 font-semibold leading-relaxed">
      We specialize in civil construction, electrical works, smart lighting,
      and CCTV installations. Share your requirements and our expert team will
      provide the best solution with quality and timely delivery.
    </p>

    <div className="mt-8 space-y-5 font-bold text-black">

      {/* EMAIL */}
      <a
        href={`mailto:${contactEmail}`}
        className="flex items-center gap-3 hover:text-green-900 transition duration-300"
      >
        <Mail className="h-6 w-6 text-red-600" />
        {contactEmail}
      </a>

      {/* LOCATION */}
      <a
        href="https://maps.app.goo.gl/NESbQdfF8tcP28hR8?g_st=aw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 hover:text-green-900 transition duration-300"
      >
        <MapPin className="h-8 w-8 text-green-900" />
        Narayankhed, Sangareddy
      </a>

      {/* PHONE */}
      <a
        href="tel:+918328131435"
        className="flex items-center gap-3 hover:text-green-900 transition duration-300"
      >
        <Phone className="h-6 w-6 text-red-700" />
        +91 8328131435
      </a>

      {/* SERVICES */}
      <div className="flex items-center gap-3 text-black/80 font-semibold">
        <span className="text-green-700">⚙️</span>
        Civil • Electrical • Smart Lighting • CCTV
      </div>

    </div>
  </div>
          {/* RIGHT FORM */}
  <form
    onSubmit={handleSubmit}
    className="rounded-lg border border-border bg-gray-100 p-6 shadow-corporate md:p-8"
  >
    <div className="grid gap-5 sm:grid-cols-2">

      {/* NAME */}
      <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground">
        Name
        <input
          name="name"
          type="text"
          required
          className="h-12 rounded-md border border-gray-300 bg-white px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your name"
        />
      </label>

      {/* PHONE */}
      <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground">
        Phone
        <input
          name="phone"
          type="tel"
          required
          className="h-12 rounded-md border border-gray-300 bg-white px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Phone number"
        />
      </label>

      {/* EMAIL */}
      <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground sm:col-span-2">
        Email
        <input
          name="email"
          type="email"
          required
          className="h-12 rounded-md border border-gray-300 bg-white px-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Email address"
        />
      </label>

      {/* MESSAGE */}
      <label className="grid gap-2 text-sm font-bold uppercase text-muted-foreground sm:col-span-2">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-md border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Tell us about your project"
        />
      </label>

    </div>

    {/* BUTTON */}
    <button
      type="submit"
      disabled={formStatus.type === "loading"}
      className="mt-6 w-full rounded-md bg-primary px-7 py-4 text-sm font-bold text-white hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {formStatus.type === "loading" ? "Sending..." : "Submit Enquiry"}
    </button>

    {/* SPINNER */}
    {formStatus.type === "loading" && (
      <div className="flex justify-center mt-4">
        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    )}

    {/* MESSAGE */}
    {formStatus.message && (
      <div
        className={`mt-4 p-3 rounded text-center ${
          formStatus.type === "success"
            ? "bg-green-100 text-green-700"
            : formStatus.type === "error"
            ? "bg-red-100 text-red-700"
            : formStatus.type === "loading"
            ? "bg-yellow-100 text-yellow-700"
            : ""
        }`}
      >
        {formStatus.message}
      </div>
    )}
  </form>
        </div>

        {/* MAP */}
  <div className="mt-10 bg-black text-white p-6 rounded-xl">
    <p className="text-xl mb-3">📍 Our Location</p>

    <div className="w-full h-64">
      <iframe
        src="https://www.google.com/maps?q=G.%20Narsa%20Reddy%20Narayankhed%20Telangana%20502286&output=embed"
        className="w-full h-full rounded-lg"
        loading="lazy"
      ></iframe>
    </div>
  </div>
  <a 
    href="https://maps.google.com/?q=G. Narsa Reddy Narayankhed Telangana 502286"
    target="_blank"
    className="inline-block mt-3 text-black  hover:underline"
  >
    Open in Google Maps →
  </a>
      </section>
    );
  };

  export default ContactPage;