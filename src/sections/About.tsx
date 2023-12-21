import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi! My name is Veysel, and my interest in web development sparked in
            2018. I work as a Frontend Developer. Especially, I enjoy working
            with modern JavaScript libraries like React and Next.
          </p>
          <p className="about-grid-info-text">
            I am working on a project where you can make comparisons for
            companies in the field of health tourism.
            <Link
              className="link"
              target="_blank"
              href="https://github.com/veyselkartalmis"
            >
              &nbsp;Health Service Compare.
            </Link>
          </p>
          <p className="about-grid-info-text">And my skills;</p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">jQuery</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">GSAP</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/veysel.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
