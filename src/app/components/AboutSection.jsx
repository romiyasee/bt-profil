"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Keterampilan",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>UI/UX Designer</li>
        <li>Front End Developer</li>
        <li>Mobile Developer</li>
        <li>Basic Networking</li>
      </ul>
    ),
  },
  {
    title: "Pendidikan",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Informatika</li>
        <li>Universitas PGRI Semarang</li>
      </ul>
    ),
  },
  {
    title: "Pengalaman Magang",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>IT Support</li>
        <li>Politeknik Harapan Bersama Kota Tegal</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.gif" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Saya Baromim Triwijaya, Mahasiswa Informatika Universitas PGRI Semarang. Saya mengkhususkan diri dalam HTML, CSS, PHP, Next.js, Flutter, Dart, MySQL, dan Firebase. Kemampuan saya melibatkan berbagai alat seperti Git, npm, dan yarn. Dengan antusiasme untuk belajar dan berkembang, saya berkomitmen untuk memanfaatkan teknologi-teknologi ini guna menciptakan solusi digital yang ramah pengguna.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Keterampilan{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Pendidikan{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Pengalaman Magang{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
