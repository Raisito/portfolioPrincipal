"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { TypewriterEffect } from "@/components/typewriter-effect";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  User,
  Briefcase,
  Folder,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  Home,
  Layers,
  Send,
  Settings,
  Contact,
} from "lucide-react";
import Image from "next/image";

import {
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJSIcon,
  TailwindIcon,
  NodeIcon,
  MySQLIcon,
  PHPIcon,
  MaterialUIIcon,
  PostgreSQLIcon,
  GitIcon,
  GitLabIcon,
  DockerIcon,
  PhpMyAdminIcon,
  RailwayIcon,
  WordpressIcon,
  VSCodeIcon,
  PostmanIcon,
  FigmaIcon,
  LaravelIcon,
  SymfonyIcon,
  BootstrapIcon,
  ShadcnIcon,
  SupabaseIcon,
  ChatGPTIcon,
  VercelIcon,
  ViteIcon,
} from "@/components/tech-icons";

// Importar el nuevo componente de experiencia
import { ExperienceSection } from "@/components/experience-section";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  // Registrar referencias a las secciones
  const registerSection = (id: string, ref: HTMLElement | null) => {
    sectionsRef.current[id] = ref;
  };

  // Navegar a una sección
  const navigateTo = (sectionId: string) => {
    setActiveSection(sectionId);

    // Si estamos en móvil y el menú está abierto, ciérralo y espera antes de hacer scroll
    if (window.innerWidth < 768 && menuOpen) {
      setMenuOpen(false);
      setTimeout(() => {
        const section = sectionsRef.current[sectionId];
        if (section) {
          const yOffset = 70; // altura del header móvil
          const y =
            section.getBoundingClientRect().top + window.pageYOffset - yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 350); // 350ms coincide con la animación del menú (ajusta si tu animación es más lenta/rápida)
    } else {
      const section = sectionsRef.current[sectionId];
      if (section) {
        const yOffset = 0;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // Encontrar la sección más cercana al borde superior
      let currentSection = "home";
      let minDistance = Number.MAX_VALUE;

      Object.entries(sectionsRef.current).forEach(([id, element]) => {
        if (element) {
          const distance = Math.abs(element.offsetTop - scrollPosition);
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navegación con botones flotantes circulares */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col gap-4">
          <CircleNavItem
            id="home"
            label="Inicio"
            icon={<Home size={18} />}
            active={activeSection === "home"}
            onClick={() => navigateTo("home")}
          />

          <CircleNavItem
            id="skills"
            label="Habilidades"
            icon={<Code size={18} />}
            active={activeSection === "skills"}
            onClick={() => navigateTo("skills")}
          />
          <CircleNavItem
            id="experience"
            label="Experiencia"
            icon={<Briefcase size={18} />}
            active={activeSection === "experience"}
            onClick={() => navigateTo("experience")}
          />
          <CircleNavItem
            id="projects"
            label="Proyectos"
            icon={<Folder size={18} />}
            active={activeSection === "projects"}
            onClick={() => navigateTo("projects")}
          />
          <CircleNavItem
            id="contact"
            label="contacto"
            icon={<Contact size={18} />}
            active={activeSection === "contact"}
            onClick={() => navigateTo("contact")}
          />
        </div>
      </div>

      {/* Navegación móvil */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold">Luis Lopez Puig</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden">
              <nav className="flex flex-col p-4 gap-2">
                <MobileNavItem
                  id="home"
                  label="Inicio"
                  icon={<Home size={18} />}
                  active={activeSection === "home"}
                  onClick={() => navigateTo("home")}
                />

                <MobileNavItem
                  id="skills"
                  label="Habilidades"
                  icon={<Code size={18} />}
                  active={activeSection === "skills"}
                  onClick={() => navigateTo("skills")}
                />
                <MobileNavItem
                  id="experience"
                  label="Experiencia"
                  icon={<Briefcase size={18} />}
                  active={activeSection === "experience"}
                  onClick={() => navigateTo("experience")}
                />
                <MobileNavItem
                  id="projects"
                  label="Proyectos"
                  icon={<Folder size={18} />}
                  active={activeSection === "projects"}
                  onClick={() => navigateTo("projects")}
                />
                <MobileNavItem
                  id="contact"
                  label="Contacto"
                  icon={<Mail size={18} />}
                  active={activeSection === "contact"}
                  onClick={() => navigateTo("contact")}
                />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Contenido principal con margen izquierdo para evitar superposición */}
      <main className="md:ml-24">
        {/* Sección de inicio */}
        <section
          id="home"
          ref={(el) => registerSection("home", el)}
          className="min-h-screen flex items-center relative overflow-hidden w-full mt-6 md:mt-0">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background"></div>
            <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                  Hola, soy{" "}
                  <span className="relative inline-block text-primary text-4xl md:text-7xl lg:text-7xl">
                    <TypewriterEffect text="Luis Lopez Puig" />
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></div>
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
                  Desarrollador Web Full Stack{" "}
                  <span className="inline-block animate-bounce">👨‍💻</span>
                </p>
              </div>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
                Un apasionado por crear experiencias digitales{" "}
                <span className="text-primary font-medium">modernas</span>,{" "}
                <span className="text-primary font-medium">intuitivas</span> y
                de{" "}
                <span className="text-primary font-medium">
                  alto rendimiento
                </span>
                .
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => navigateTo("projects")}>
                  Ver proyectos
                  <Folder className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => navigateTo("contact")}>
                  Contacto
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/CV.pdf";
                    link.download = "CV.pdf";
                    link.click();
                  }}>
                  Descargar CV
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col items-center">
              {/* Badge para indicar búsqueda de trabajo con animación */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="absolute top-[-10%] -translate-y-1/2 bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-3 md:px-4 py-1 md:py-2 rounded-full shadow-lg animate-pulse ring-2 ring-primary/20 mt-3 me-1 md:me-2">
                ¡Disponible!
              </motion.div>
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 blur-xl"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                  <Image
                    src="/images/fotos/foto.jpg"
                    alt="Tu Nombre"
                    width={300}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/LLPFP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/luis-lópez-puig-824048258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sección Habilidades */}
        <section
          id="skills"
          ref={(el) => registerSection("skills", el)}
          className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeader
              title="Habilidades"
              subtitle="Tecnologías y herramientas con las que trabajo"
            />

            <div className="mt-16 space-y-16">
              {/* Frontend Technologies */}
              <SkillCategory
                title="Frontend Development"
                icon={<Code className="h-6 w-6" />}
                skills={[
                  { name: "HTML5", icon: <HTMLIcon /> },
                  { name: "CSS3", icon: <CSSIcon /> },
                  { name: "JavaScript", icon: <JavaScriptIcon /> },
                  { name: "TypeScript", icon: <TypeScriptIcon /> },
                  { name: "React", icon: <ReactIcon /> },
                  { name: "Next.js", icon: <NextJSIcon /> },
                  { name: "Vite", icon: <ViteIcon /> },
                  { name: "Tailwind CSS", icon: <TailwindIcon /> },
                  { name: "Bootstrap", icon: <BootstrapIcon /> },
                  { name: "Material UI", icon: <MaterialUIIcon /> },
                  { name: "shadcn/ui", icon: <ShadcnIcon /> },
                ]}
              />

              {/* Backend */}
              <SkillCategory
                title="Backend Development"
                icon={<Layers className="h-6 w-6" />}
                skills={[
                  { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
                  { name: "MySQL", icon: <MySQLIcon /> },
                  { name: "phpMyAdmin", icon: <PhpMyAdminIcon /> },
                  { name: "RESTful APIs", icon: <NodeIcon /> },
                  { name: "PHP", icon: <PHPIcon /> },
                  { name: "Laravel", icon: <LaravelIcon /> },
                  { name: "Symfony", icon: <SymfonyIcon /> },
                  { name: "Supabase", icon: <SupabaseIcon /> },
                  { name: "Railway", icon: <RailwayIcon /> },
                ]}
              />

              {/* Tools & DevOps */}
              <SkillCategory
                title="Herramientas & DevOps"
                icon={<Settings className="h-6 w-6" />}
                skills={[
                  { name: "Git", icon: <GitIcon /> },
                  { name: "Docker", icon: <DockerIcon /> },
                  { name: "VSCode", icon: <VSCodeIcon /> },
                  { name: "Postman", icon: <PostmanIcon /> },
                  { name: "Wordpress", icon: <WordpressIcon /> },
                  { name: "GitHub", icon: <Github /> },
                  { name: "Vercel", icon: <VercelIcon /> },
                  { name: "Gitlab", icon: <GitLabIcon /> },
                  { name: "Figma", icon: <FigmaIcon /> },
                  { name: "ChatGPT", icon: <ChatGPTIcon /> },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Sección Experiencia */}
        <section
          id="experience"
          ref={(el) => registerSection("experience", el)}
          className="py-20 md:py-32">
          <ExperienceSection />
        </section>

        {/* Sección Proyectos */}
        <section
          id="projects"
          ref={(el) => registerSection("projects", el)}
          className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeader
              title="Proyectos"
              subtitle="Una selección de mis trabajos más destacados"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="DevMania"
                description="Juego de memoria desarrollado con React, TypeScript y Tailwind CSS. Los datos del juego, como el puntaje, se almacenan en una base de datos, captando los datos desde una api"
                image="/images/projects/devmania.png"
                tags={[
                  "HTML",
                  "CSS",
                  "Animations",
                  "Responsive Design",
                  "Wordpress",
                  "PHP",
                  "Git",
                ]}
                repoLink="https://github.com/LLPFP/DevMania-Wordpress"
                demoLink="https://luis.w3bcn.es"
                delay={0.2}
              />
              <ProjectCard
                title="Memory Game"
                description="Juego de memoria desarrollado con React, TypeScript y Tailwind CSS. Los datos del juego, como el puntaje, se almacenan en una base de datos, captando los datos desde una api"
                image="/images/projects/memory.png"
                tags={[
                  "HTML",
                  "CSS",
                  "Animations",
                  "Responsive Design",
                  "React",
                  "TypeScript",
                  "Next.js",
                  "API",
                ]}
                repoLink="https://github.com/LLPFP/memory-next"
                demoLink="https://memory-next.vercel.app/home"
                delay={0.2}
              />
              <ProjectCard
                title="Tetris"
                description="Juego clásico de Tetris desarrollado con React, Bootstrap y CSS. Los datos del juego, como el puntaje, se almacenan en LocalStorage para mantener el progreso."
                image="/images/projects/tetris.png"
                tags={["React", "HTML", "Bootstrap", "CSS", "LocalStorage"]}
                repoLink="https://github.com/LLPFP/tetrisReact"
                demoLink="https://tetris-react-zeta.vercel.app/"
                delay={0}
              />
              <ProjectCard
                title="Registro de Incidencias"
                description="Aplicación para registrar incidencias, donde los usuarios pueden iniciar sesión, registrar nuevas incidencias, editarlas y agregar comentarios. Desarrollada con React, Bootstrap y Supabase."
                image="/images/projects/registro.png"
                tags={["React", "HTML", "Bootstrap", "CSS", "Supabase"]}
                repoLink="https://github.com/LLPFP/RegistroIncidencias"
                demoLink="https://registro-incidencias.vercel.app"
                delay={0.1}
              />
              <ProjectCard
                title="Vimeo Clone"
                description="Copia de Vimeo para practicar habilidades de CSS y maquetación. Incluye animaciones y diseño responsivo."
                image="/images/projects/vimeo.png"
                tags={["HTML", "CSS", "Animations", "Responsive Design"]}
                repoLink="https://github.com/LLPFP/Vimeo-LLP"
                demoLink="https://vimeo-llp.vercel.app/"
                delay={0.2}
              />
            </div>
          </div>
        </section>
        {/* Sección Contacto */}
        <section
          id="contact"
          ref={(el) => registerSection("contact", el)}
          className="flex flex-cols py-12 bg-gradient-to-b from-background to-muted/10">
          <div className="container px-4 md:px-6 mx-auto max-w-2xl">
            <SectionHeader
              title="Contacto"
              subtitle="¿Tienes una idea para un proyecto? ¡Hablemos!"
            />

            {/* Extra Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/10 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-5">
              <h4 className="text-lg font-semibold text-primary">
                ¿Sabías que...?
              </h4>
              <p className="text-muted-foreground mt-2 text-sm">
                Estoy constantemente aprendiendo nuevas tecnologías mejorando
                mis habilidades, para así ofrecer mejores soluciones y más
                eficientes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted/20 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Información
              </h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-center gap-3">
                  <User className="h-4 w-4 text-primary" />
                  Luis Lopez Puig
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  luis.lopu@hotmail.com
                </li>
                <li className="flex items-center gap-3">
                  <Home className="h-4 w-4 text-primary" />
                  Badalona, Barcelona
                </li>
              </ul>
              <div className="pt-4 flex flex-col items-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/CV.pdf";
                    link.download = "CV.pdf";
                    link.click();
                  }}
                  className="mb-3">
                  Descargar CV
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <div className="flex justify-center gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/LLPFP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors shadow-md">
                    <Github className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://linkedin.com/in/luis-lópez-puig-824048258"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors shadow-md">
                    <Linkedin className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="mailto:luis.lopu@hotmail.com"
                    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors shadow-md">
                    <Mail className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Footer */}
        <footer className="py-6 border-t">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Luis Lopez Puig. Todos los derechos
              reservados.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// Actualizar el componente CircleNavItem para eliminar el tooltip blanco
function CircleNavItem({
  id,
  label,
  icon,
  active,
  onClick,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-white text-muted-foreground hover:bg-primary/10 hover:text-foreground"
        }`}
        aria-label={label}>
        {icon}
      </motion.button>
    </div>
  );
}

// Componente para elementos de navegación en móvil
function MobileNavItem({
  id,
  label,
  icon,
  active,
  onClick,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-md w-full transition-colors ${
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
      }`}>
      {icon}
      <span className="font-medium">{label}</span>
    </motion.button>
  );
}

// Componente para encabezados de sección
function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold">
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mt-3">
        {subtitle}
      </motion.p>
    </div>
  );
}

// Componente para barras de habilidades
function SkillBar({ name, value }: { name: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-2" indicatorClassName="bg-primary" />
    </div>
  );
}

// Componente para elementos de timeline
function TimelineItem({
  year,
  title,
  company,
  description,
  tags,
  isLast = false,
}: {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative">
      {!isLast && (
        <div className="absolute top-0 left-[39px] w-px h-full bg-muted-foreground/20"></div>
      )}

      <div className="flex gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 z-10 relative">
            <span className="text-primary font-semibold">
              {year.split(" - ")[0]}
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
          <p className="text-muted-foreground">{description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-primary/5">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Componente para tarjetas de proyectos
function ProjectCard({
  title,
  description,
  image,
  tags,
  repoLink,
  demoLink,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoLink: string;
  demoLink: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}>
      <Card className="h-full overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow duration-300 group bg-gradient-to-br from-background to-primary/5">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end backdrop-blur-sm">
            <div className="p-6 w-full flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="w-full backdrop-blur-md hover:bg-primary/80 hover:text-white transition-all duration-200"
                onClick={() => window.open(repoLink, "_blank")}>
                Repositorio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-2 h-4 w-4">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.623-5.479 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
                </svg>
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="w-full backdrop-blur-md hover:bg-primary/90 transition-colors"
                onClick={() => window.open(demoLink, "_blank")}>
                Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-primary/10 hover:bg-primary/20 transition-colors text-xs font-medium px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
// Componente para categorías de habilidades
function SkillCategory({
  title,
  icon,
  skills,
}: {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; icon: React.ReactNode }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// Componente para tarjetas individuales de habilidades
function SkillCard({
  skill,
  index,
}: {
  skill: { name: string; icon: React.ReactNode };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group">
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-background to-muted/20">
        <CardContent className="p-4 text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center">
            {skill.icon}
          </motion.div>

          <div className="space-y-3">
            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {skill.name}
            </h4>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
