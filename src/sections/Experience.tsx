import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "VIVA SMART",
      role: "Frontend Developer",
      url: "https://vivasmartcare.com/",
      start: "September 2023",
      end: "Present",
      shortDescription: [
        "As a React Frontend Developer at Viva Smart Tech, I have successfully designed and implemented the user interface for smart devices that deliver real-time health notifications.",
        "Developed interactive and user-friendly interfaces for health notification devices using React.",
        "Established a robust communication framework using MQTT for real-time notifications.",
        "Ensured seamless integration with the backend system powered by Node.js, Express, and MongoDB.",
        "Optimized interface designs for enhanced performance and an improved user experience",
      ],
    },
    {
      name: "INVEON",
      role: "Frontend Developer",
      url: "https://www.inveon.com/",
      start: "January 2023",
      end: "August 2023",
      shortDescription: [
        "I am working for the Colin's TR /MA /UA /RU /RO /EG, Bizim Toptan and Majestic websites.",
        "Collaborated with our backend developers and project managers to ensure timely delivery of projects.",
        "Resolved bugs and issues reported by clients and implement fixes in a timely manner",
        "Wrote clean, efficient, and reusable code that adheres to industry best practices.",
        "Implemented version control using Git and follow Agile development methodology.",
      ],
    },
    {
      name: "BILTEK",
      role: "Frontend Developer",
      url: "https://www.biltektasarim.com/",
      start: "March 2021",
      end: "January 2023",
      shortDescription: [
        "Designed dynamic and browser compatible pages using HTML, CSS, SASS, jQuery, Javascript. And GSAP for animations.",
        "Worked as a Frontend Developer in a software agency specializing in building customized e-commerce systems and web-based solutions from the ground up.",
        "Ensured consistency across different devices through responsive web design principles and stayed updated on the latest technological trends in project execution.",
        "Enhanced team performance by fostering effective communication and collaboration in projects conducted under the Agile methodology.",
      ],
    },
    {
      name: "Xanneň Toň",
      role: "Frontend Developer",
      url: "",
      start: "December 2020",
      end: "February 2021",
      shortDescription: [
        "As a React Frontend Developer, I played a pivotal role in revamping and enhancing a stock tracking program. I diligently refactored existing code, addressed bugs, and introduced new features to elevate the program's functionality and user experience.",
        "Conducted comprehensive code reviews and refactored the React codebase for improved readability, maintainability, and performance",
        "Identified and resolved software defects, ensuring a stable and error-free operation of the stock tracking program.",
        "Successfully implemented new features to enhance the program's capabilities, meeting the evolving needs of users and stakeholders.",
      ],
    },
    {
      name: "UGETAM",
      role: "Software Developer Intern",
      url: "https://ugetam.istanbul/",
      start: "September 2016",
      end: "June 2017",
      shortDescription: [
        "Developed robust desktop applications utilizing C# programming language.",
        "Collaborated with cross-functional teams to gather requirements and implement software solutions that met client needs.",
        "Participated in the entire software development life cycle, from concept and design to testing and deployment.",
        "Debugged and resolved software defects, ensuring the delivery of high-quality, error-free applications.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
