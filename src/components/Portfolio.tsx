"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      devStack: "MongoDB, Express, React, Nodejs",
      link: "https://example.com/project1",
      git: "#",
      src: proj1,
    },
    {
      title: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      devStack: "Next.js, Tailwind CSS, TypeScript",
      link: "https://example.com/project2",
      git: "#",
      src: proj2,
    },
    {
      title: "Project 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      devStack: "Vue.js, Firebase, Vuetify",
      link: "https://example.com/project3",
      git: "#",
      src: proj3,
    },
    {
      title: "Project 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      devStack: "Angular, TypeScript, SCSS",
      link: "https://example.com/project4",
      git: "#",
      src: proj4,
    },
  ];

  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-16 mt-40"
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-12">
        Selected <span className="tex">Projects</span>
      </h1>
      <div className="max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
            className={`mt-12 flex gap-12 ${
              index % 2 === 0
                ? "flex md:flex-row"
                : "flex-col-reverse md:flex-row-reverse"
            }`}
          >
            <div className="space-y-2 max-w-[500px]">
              <h2 className="text-7xl my-4 text-white/70">0{index + 1}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.description}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link}>Live Link</a>
                <a href={project.git}>Code</a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={project.src}
                alt={project.title}
                height={400}
                width={10000}
                className="h-[400px] max-w-[400px] object-cover rounded border border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
