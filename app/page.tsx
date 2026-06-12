import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "simonev",
    title: "SIMONEV BDI MEDAN",
    description: "Sistem manajemen sertifikasi, asesmen (APL01/02), dan otomatisasi dokumen PDF untuk efisiensi birokrasi.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: "sim-nonpersediaan",
    title: "SIM Non-Persediaan",
    description: "Digitalisasi manajemen inventaris aset non-persediaan dengan sistem pelaporan real-time.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "Node.js", "MySQL", "Tailwind"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: "survey-kinerja",
    title: "Survey Kinerja AKHLAK",
    description: "Monitoring budaya kerja organisasi melalui dashboard analitik dan integrasi data berbasis IoT.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "Firebase", "IoT", "Chart.js"],
    color: "from-orange-500 to-amber-400"
  },
  {
    id: "apl-lsp",
    title: "APL LSP BDI Medan",
    description: "Sistem manajemen asesmen (APL01/02), dan otomatisasi dokumen PDF untuk efisiensi birokrasi.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Express"],
    color: "from-indigo-500 to-purple-400"
  },
  {
    id: "spa-bmn",
    title: "Sistem Pemeliharaan Aset BMN",
    description: "Optimasi siklus pemeliharaan aset Barang Milik Negara dengan pelacakan status terpadu.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Auth.js"],
    color: "from-rose-500 to-pink-400"
  },
  {
    id: "inkubis",
    title: "Inkubator Bisnis",
    description: "Platform ekosistem digital untuk pengelolaan tenant dan akselerasi startup di BDI Medan.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary"],
    color: "from-sky-500 to-blue-400"
  }, 
  {
    id: "wbs-simulator",
    title: "WBS Simulator",
    description: "Simulasi Digital Timbangan Muatan Kendaraan di Pabrik Kelapa Sawit.",
    image: "/projects/inkubis1.png",
    technologies: ["Next.js", "TypeScript", "Three.js", "Firebase"],
    color: "from-violet-500 to-fuchsia-400"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070c] text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden font-sans antialiased">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        {/* Ambient Backdrops */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.18),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(99,102,241,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        
        {/* Subtle Tech Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] pointer-events-none mix-blend-overlay"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-xl px-4 py-1.5 text-xs font-medium tracking-wider text-slate-300 mb-8 transition-colors duration-300 hover:border-slate-700">
            <span className="mr-2.5 flex h-2 w-2 relative">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Maganghub Batch 1 Showcase
          </div>
          
          {/* Title */}
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl select-none leading-none">
            Our <span className="bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">Project</span>
          </h1>
          
          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400/90 font-light">
            Aplikasi yang telah kami kembangkan untuk mendukung langkah awal transformasi digital, otomasi proses bisnis, dan implementasi teknologi modern di <span className="text-white font-normal">Balai Diklat Industri Medan.</span>
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-40">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-[2rem] border border-white/[0.05] bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-sm p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/[0.12] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Dynamic Color Glow behind individual cards on hover */}
              <div className={`absolute -inset-px rounded-[2rem] bg-gradient-to-br ${project.color} opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-[0.06] pointer-events-none z-0`} />

              {/* Image Container with Elegant Mask */}
              <div className="relative h-52 w-full overflow-hidden rounded-[1.4rem] bg-slate-950 z-10">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Tech Line Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] z-20 overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className={`h-full w-full bg-gradient-to-r ${project.color}`}></div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col pt-5 px-2 z-10">
                <h3 className="text-lg font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed text-slate-400 font-light group-hover:text-slate-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.04] bg-white/[0.02] px-2.5 py-1 text-[10px] font-medium text-slate-400 backdrop-blur-md transition-all duration-300 group-hover:border-white/[0.08] group-hover:bg-white/[0.04] group-hover:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Micro-Interaction Button */}
                <div className="mt-auto pt-6">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white text-slate-300 hover:text-slate-950 py-3.5 text-xs font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] group/btn shadow-sm"
                  >
                    <span className="transform group-hover/btn:-translate-x-0.5 transition-transform duration-300">Explore Project</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.0"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}