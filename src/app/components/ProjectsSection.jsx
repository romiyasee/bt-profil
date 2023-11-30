"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Next Js Portofolio Website",
    description: "Website Portofolio ini menggunakan Next.js, sebuah framework React, untuk memberikan pengalaman pengguna yang responsif dan cepat.",
    image: "/images/projects/17.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/romiyasee/bt-profil",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Origamistore UI",
    description: "Website OrigamiStore adalah toko online yang menarik secara visual untuk para penggemar origami, dibuat menggunakan HTML dan CSS untuk memastikan pengalaman berbelanja yang elegan dan ramah pengguna.",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/romiyasee/website-Origamistore"
  },
  {
    id: 3,
    title: "Flight Administration Web",
    description: "Flight Administration Web Admin yang didukung oleh PHP dan MySQL, menawarkan solusi komprehensif untuk mengelola dan mengorganisir data dan operasi terkait penerbangan dengan efisien.",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/romiyasee/Web-Admin-Penerbangan",
    previewUrl: "/" ,
  },
  {
    id: 4,
    title: "Travel Guide App 'SPOT' UI",
    description: "Aplikasi berbasis Flutter untuk menjelajahi kota Semarang, berfungsi sebagai panduan wisata untuk menemukan atraksi lokal, restoran, dan informasi penting guna pengalaman wisata yang lebih berkesan.",
    image: "/images/projects/15.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/proto/cKXKir07hCNgJfKjCey92Y/Travel-%2F-Booking-app-UI-(Community)?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=Ed3X1wrdZYFW6Qej-1",
    previewUrl: "https://www.figma.com/proto/cKXKir07hCNgJfKjCey92Y/Travel-%2F-Booking-app-UI-(Community)?node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=Ed3X1wrdZYFW6Qej-1",
  },
  {
    id: 5,
    title: "SIG Pemetaan Sepeda Motor dan Kecelakaan Jawa Tengah",
    description: "mengembangkan Sistem Informasi Geografis (SIG) yang memetakan jumlah sepeda motor dan tingkat kecelakaan di wilayah Jawa Tengah dengan memanfaatkan teknologi pemetaan dan analisis geografis.",
    image: "/images/projects/16.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/romiyasee/sig-lakamotor",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AempeDev App",
    description: "Projek Aplikasi Pembelajaran Pemrograman Mobile (Advanced Mobile Programming)",
    image: "/images/projects/18.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
