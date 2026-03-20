import React from "react";
import AboutImage from "../assets/images/ranit2.jpg.jpeg";
import { FaDev, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary mb-6 text-center">
          My Resume
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 md:mr-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary mb-4 text-center">
                Skills
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>ReactJS</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Spring Boot</li>
                <li>REST API</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Git</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Education
              </h3>
              <p className="font-medium">Masters of Computer Application</p>
              <p>Pursuing from Sastra University (Present)</p>
              <br />
              <p className="font-medium">Bachelors in Computer Application</p>
              <p>Graduated from Burdwan University (2024)</p>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Certification
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Microsoft Certified: Azure Fundamentals (AZ-900)</li>
                <li>Microsoft Certified: Azure AI Engineer Associate (AI-102)</li>
                <li>Hacker Rank Software Engineer Certificate</li>
                <li>Hacker Rank Software Engineer Intern Certificate</li>
                <li>Hacker Rank Frontend Developer (React) Certificate</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary mt-8 mb-4 text-center">
                Projects
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                
                <li>
                  <a
                    className="text-primary"
                    href="https://github.com/Ranit42179/Todo-Flarelist"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Todo Flarelist
                  </a>{" "}
                  - A to-do list application built with ReactJS and Tailwind CSS
                </li>
                <li>
                  <a
                    href="https://github.com/Ranit42179/Interactive-Quiz-Web-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Interactive-Quiz-Web-Application
                  </a>{" "}
                  - Created a quiz web application system, highlighting ability
                  to design and implement functional web solutions.
                </li>
                
                <li>
                  <a
                    href="https://github.com/Ranit42179/Basic-Calculator-Web-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Basic-Calculator-Web-Application
                  </a>{" "}
                  - Designed and built a interactive calculator, showcasing
                  expertise in front-end development.
                </li>
                <li>
                  <a
                    href="https://github.com/Ranit42179/Student-teacher-booking-appointment-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Student-Teacher Appointment Booking System
                  </a>{" "}
                  - Created a user-friendly booking system, highlighting ability
                  to design and implement functional web solutions.
                </li>
                <li>
                  <a
                    href="https://github.com/Ranit42179/MongoDB-CRUD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    MongoDB CRUD
                  </a>{" "}
                  - A backend project that demonstrates CRUD operations with MongoDB.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center sm:mb-0 mb-4">
            <img
              src={AboutImage}
              alt="Ranit Ghosh"
              className="rounded-full object-cover w-48 h-48 mx-auto mb-6 border-4 border-primary"
            />
            <p className="text-xl font-medium">Ranit Ghosh</p>
            <p className="text-lg text-secondary">
              Full Stack Developer | Software Developer
            </p>
            <a
              href="mailto:ranitghosh42179@gmail.com"
              className="text-lg text-primary mt-4 block"
            >
              ranitghosh42179@gmail.com
            </a>
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://www.linkedin.com/in/ranit--ghosh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-[#0077B5] hover:text-secondary" />
              </a>
              <a
                href="https://github.com/Ranit42179"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-[#333] hover:text-secondary" />
              </a>
              <a
                href="https://www.instagram.com/ranit__2003/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-[#E4405F] hover:text-secondary" />
              </a>
              {/* <a
                href="https://dev.to/saamsheron"
                target="_blank"
                rel="noopener noreferrer">
                <FaDev className="text-2xl  hover:text-secondary" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
