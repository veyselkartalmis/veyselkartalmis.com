import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project.webp",
      projectName: "gitFollow",
      projectLink: "https://git-follow.vercel.app/",
      projectDescription:
        "A tool built using the GitHub API that allows users to manage their followers, following, and unfollowers. This project provides insights into GitHub relationships, helping users stay organized and engaged with their network.        ",
      projectTech: ["React", "Tailwind", "Github API"],
      projectExternalLinks: {
        github: "https://github.com/veyselkartalmis/gitFollow",
        externalLink: "https://git-follow.vercel.app/",
      },
    },
    {
      image: "/project.webp",
      projectName: "Cryptocurrency App",
      projectLink: "https://crypto-api-app-redux.netlify.app/",
      projectDescription:
        "A cryptocurrency tracking application built with React and Redux. This project allows users to explore real-time cryptocurrency prices, view historical data, and manage their favorite cryptocurrencies.",
      projectTech: ["React", "Redux", "CSS", "API"],
      projectExternalLinks: {
        github:
          "https://github.com/veyselkartalmis/cryptocurrency-app-react-redux",
        externalLink: "https://crypto-api-app-redux.netlify.app/",
      },
    },
    {
      image: "/project.webp",
      projectName: "MERN Blog",
      projectLink: "",
      projectDescription:
        "A full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with JWT authentication. This project allows users to sign in, create, and edit blog posts securely.",
      projectTech: ["React", "MongoDB", "Node.js", "Express.js"],
      projectExternalLinks: {
        github: "https://github.com/veyselkartalmis/MERN-blog",
        externalLink: "https://crypto-api-app-redux.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
