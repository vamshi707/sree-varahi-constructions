import waring2 from "@/assets/waring2.jpg";
import elework2 from "@/assets/elework2.jpg";
import waringele from "@/assets/waringele.jpg";
import pole from "@/assets/pole.jpg";
import workimg from "@/assets/workimg.jpg";
import waring3 from "@/assets/waring3.jpg";

 const projects = [
    
  {
    title: "Electrical Wiring & Distribution",
    category: "Infrastructure",
    description: "End-to-end electrical wiring solutions for residential and commercial complexes. We prioritize safety, load balancing, and long-term durability in all our installations.",
    challenge: "Managing complex high-voltage load distributions in multi-story buildings.",
    solution: "We implemented automated circuit protection and high-grade conduit systems, ensuring zero-downtime and safety compliance.",
    points: ["Panel Installation", "Circuit Load Balancing", "Safety Audits", "Fault Detection"],
    image: waring2,
    extraImages: [elework2,waringele],
  },
  {
    title: "Solar & Smart Street Lighting",
    category: "Sustainable Tech",
    description: "Installation and maintenance of smart, sensor-based street lighting and solar arrays. Our systems are designed to maximize energy efficiency and reduce utility costs.",
    challenge: "Integrating sensor automation with existing aging infrastructure.",
    solution: "Installed custom smart-controllers that enable auto-dimming and real-time fault tracking, significantly lowering maintenance overheads.",
    points: ["Solar Array Setup", "LED Integration", "Sensor Automation", "Predictive Maintenance"],
    image: pole,
    extraImages: [workimg,waring3],
  },
];

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-24 px-6">
      
      {/* Title Section */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <h1 className="text-5xl font-extrabold tracking-tight">Core Infrastructure Portfolio</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        <p className="mt-8 text-xl text-slate-400">Precision execution for modern electrical and lighting systems.</p>
      </div>

      {/* Projects Container */}
      <div className="max-w-7xl mx-auto space-y-40">
        {projects.map((project, index) => (
          <div key={project.title} className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Content Side */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-blue-400 font-bold tracking-widest text-xs uppercase">{project.category}</span>
              <h2 className="text-4xl font-bold leading-tight">{project.title}</h2>
              <p className="text-slate-400 leading-relaxed text-lg">{project.description}</p>
              
              {/* Troubleshooting/Problem-Solution Section */}
              <br /><br /><br />
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-6">
                <div>
                  <h4 className="text-blue-400 font-bold text-sm uppercase">Common Issues Addressed</h4>
                  <p className="text-slate-300 text-sm mt-2">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-bold text-sm uppercase">Our Technical Approach</h4>
                  <p className="text-slate-300 text-sm mt-2">{project.solution}</p>
                </div>
              </div>

              {/* Service List */}
              <div className="grid grid-cols-2 gap-3">
                {project.points.map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {point}
                  </div>
                ))}
              </div>
            </div>
            

            {/* Image Gallery with Animation */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.extraImages[0]}
                  alt="detail"
                  className="w-full h-58 object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.extraImages[1]}
                  alt="detail"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="mt-32 text-center">
  <h2 className="text-3xl font-bold">Why Choose Us</h2>

  <div className="grid md:grid-cols-3 gap-8 mt-10">
    
    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold">100%</h3>
      <p className="text-slate-400">client satisfaction.</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold">8+ Years</h3>
      <p className="text-slate-400">Experience</p>
    </div>

    <div className="bg-slate-900 p-6 rounded-xl">
      <h3 className="text-xl font-bold">24/7</h3>
      <p className="text-slate-400">Support</p>
    </div>

  </div>
</div>

    </main>
  );
};
export default ProjectsPage;