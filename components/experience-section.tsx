"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

type ExperienceItem = {
  image?: string;
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
};

const experienceData: ExperienceItem[] = [
  {
    image: "/images/fotos/w3logo.png",
    year: "2025 - Presente",
    title: "Desarrollador Full Stack",
    company: "W3 Barcelona",
    description:
      "Desarrollo de aplicaciones web con PHP, Symfony y Twig. Implementación de base de datos. Colaboración en proyectos y gestión de contenido.",
    tags: ["PHP", "Symfony", "Twig", "XAMPP", "Git", "Gitlab", "phpMyAdmin"],
  },
  {
    image: "/images/fotos/sertranslogo.png",
    year: "2022 - Jun 2022",
    title: "Técnico en Sistemas",
    company: "Sertrans",
    description:
      "Soporte en la administración y mantenimiento de sistemas y redes. Resolución de incidencias de hardware y software. Asistencia técnica a usuarios. Colaboración en proyectos de optimización de infraestructura IT y actualización de documentación técnica.",
    tags: ["Soporte Técnico", "Redes", "Hardware", "Infraestructura IT"],
  },
];

const educationData: ExperienceItem[] = [
  {
    image: "/images/fotos/llefialogo.jpg",
    year: "2022 - 2025",
    title: "DAW (Desarrollo de Aplicaciones Web)",
    company: "FPLlefià",
    description:
      "Formación en desarrollo de aplicaciones web, diseño de interfaces, bases de datos y metodologías ágiles.",
    tags: [
      "PHP",
      "JavaScript",
      "React",
      "Bases de Datos",
      "Metodologías Ágiles",
    ],
  },
  {
    image: "/images/fotos/llefialogo.jpg",
    year: "2020 - 2022",
    title: "SMX (Sistemas Microinformáticos y Redes)",
    company: "FPLlefià",
    description:
      "Estudios centrados en la configuración y mantenimiento de sistemas informáticos, redes y soporte técnico.",
    tags: ["Redes", "Hardware", "Sistemas Operativos", "Soporte Técnico"],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  return (
    <div className="container px-4 md:px-6 mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold">
          Experiencia & Formación
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mt-3">
          Mi trayectoria profesional y académica
        </motion.p>
      </div>

      {/* Selector de pestañas rediseñado */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-muted/30 p-1 rounded-full">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            }`}>
            <Briefcase className="h-4 w-4" />
            <span>Experiencia</span>
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
              activeTab === "education"
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted"
            }`}>
            <GraduationCap className="h-4 w-4" />
            <span>Formación</span>
          </button>
        </div>
      </div>

      {/* Contenido de experiencia */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}>
          <div className="grid gap-8">
            {(activeTab === "experience" ? experienceData : educationData).map(
              (item, index) => (
                <TimelineCard key={index} item={item} index={index} />
              )
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TimelineCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Barra lateral con imagen */}
            <div className="bg-primary/40 p-6 flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.company}`}
                  className="w-32 h-32 object-contain rounded-md"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-muted rounded-md">
                  <span className="text-sm text-muted-foreground">
                    Sin imagen
                  </span>
                </div>
              )}
            </div>

            {/* Contenido principal */}
            <div className="p-6 flex-1">
              <span className="text-primary font-bold text-lg block mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-primary/90 mb-3">{item.company}</p>
              <p className="text-muted-foreground mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="bg-primary/5">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
