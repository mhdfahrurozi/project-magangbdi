"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Data Detail Project (Bisa disesuaikan atau di-fetch berdasarkan ID)
const projectDetail = {
  id: "inkubis",
  title: "Inkubator Bisnis BDI Medan",
  subtitle: "Platform Ekosistem Digital & Akselerasi Tenant",
  description:
    "Inkubator Bisnis (Inkubis) BDI Medan adalah platform manajemen terpadu yang dirancang untuk mendukung inkubasi startup, pendampingan tenant, serta monitoring perkembangan bisnis secara real-time. Aplikasi ini mendigitalisasi seluruh alur administrasi dari seleksi awal, inkubasi harian, hingga pelaporan performa usaha.",
  webLink: "https://github.com/Programmer-BDI-Medan/inkubis", // Contoh Link Web Aplikasi
  color: "from-sky-500 to-blue-400",
  technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "Tailwind CSS"],
  screenshots: [
    "/projects/sipasbdi-cover.png", // Ganti dengan path screenshot Anda
    "/projects/inkubis-dashboard.png",
    "/projects/inkubis-tenant.png",
  ],
  features: [
    "Sistem Seleksi & Registrasi Tenant Online",
    "Dashboard Evaluasi Kemajuan Tenant (Matriks Bisnis)",
    "Manajemen Dokumen Legalitas & Modul Mentoring",
    "Sistem Pelaporan Keuangan & Omzet Terintegrasi"
  ],
  documents: [
    { name: "Flowchart_Sistem_Inkubis_v1.pdf", size: "2.4 MB", type: "pdf" },
    { name: "UseCase_Diagram_Inkubis.png", size: "1.8 MB", type: "image" },
    { name: "SOP_Tenant_Inkubasi_BDI.docx", size: "850 KB", type: "word" },
  ],
};

export default function ProjectDetailPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efek Auto-play Slider Hero (Bergeser otomatis setiap 4 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectDetail.screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. Header / Breadcrumb Navigation */}
      <nav className="mx-auto max-w-7xl px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:-translate-x-1 transition-transform" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Kembali ke Repository
        </Link>
      </nav>

      {/* 2. Title & Action Section */}
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${projectDetail.color} mb-4`}></div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">{projectDetail.title}</h1>
            <p className="mt-2 text-lg text-slate-400 font-medium">{projectDetail.subtitle}</p>
          </div>
          
          {/* Live Link Button */}
          <a
            href={projectDetail.webLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition-all duration-300 hover:bg-blue-500 hover:text-white group/btn shadow-[0_4px_30px_rgba(255,255,255,0.05)] hover:shadow-blue-500/20 active:scale-95 whitespace-nowrap"
          >
            Kunjungi Situs Web
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          </a>
        </div>
      </section>

      {/* 3. Hero Auto-playing Slider / Screenshot Component */}
      <section className="mx-auto max-w-7xl px-6 mb-16">
        <div className="relative h-[250px] sm:h-[450px] md:h-[550px] w-full overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 shadow-2xl">
          {projectDetail.screenshots.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`${projectDetail.title} Screenshot ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-40"></div>
            </div>
          ))}

          {/* Slider Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-slate-900/60 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800">
            {projectDetail.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Description & Tech Stack Grid */}
      <section className="mx-auto max-w-7xl px-6 mb-20 grid gap-12 lg:grid-cols-3">
        {/* Left/Middle Column: Bio & Core Features */}
        <div className="lg:col-span-2 space-y-8">
          <div className="rounded-[2rem] border border-slate-900 bg-slate-950/30 p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">Tentang Aplikasi</h2>
            <p className="text-base leading-relaxed text-slate-400">{projectDetail.description}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-900 bg-slate-950/30 p-8 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">Fitur Utama</h2>
            <ul className="space-y-3.5">
              {projectDetail.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </span>
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Spec Tech Meta */}
        <div className="h-fit rounded-[2rem] border border-slate-900 bg-slate-950/50 p-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            Arsitektur Teknologi
          </h2>
          <div className="flex flex-wrap gap-2">
            {projectDetail.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-slate-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          
    
        </div>
      </section>

      {/* 5. Document Downloads Section (At the Bottom) */}
      <section className="border-t border-slate-900 bg-slate-950/20">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Lampiran & Dokumen Sistem</h2>
            <p className="text-sm text-slate-400">Unduh berkas arsitektur diagram, flow rancangan, serta dokumen pendukung analisis sistem.</p>
          </div>

          {/* Document Rows */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectDetail.documents.map((doc, idx) => (
              <div 
                key={idx}
                className="group/doc flex items-center justify-between rounded-2xl border border-slate-900 bg-slate-950/50 p-4 transition-all duration-300 hover:border-slate-800 hover:bg-slate-950"
              >
                <div className="flex items-center gap-3.5 overflow-hidden">
                  {/* File Type Icon Wrapper */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-blue-400 group-hover/doc:text-white group-hover/doc:bg-blue-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
                  </div>
                  
                  {/* Name & Size */}
                  <div className="overflow-hidden">
                    <p className="truncate text-sm font-semibold text-slate-200 group-hover/doc:text-blue-400 transition-colors" title={doc.name}>
                      {doc.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{doc.size}</p>
                  </div>
                </div>

                {/* Download Button Action */}
                <a 
                  href={`/downloads/${doc.name}`} // Sesuaikan endpoint atau path public folder file Anda
                  download
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-slate-400 border border-slate-800 hover:bg-white hover:text-slate-950 transition-all active:scale-90"
                  title="Unduh File"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}