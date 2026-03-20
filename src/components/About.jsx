import React from "react";
import AboutImage from "../assets/images/ranit2.jpg.jpeg";


const About = () => {
  return (
    <section id="about" className="py-16 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          About Me
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left Column - Image */}
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden shadow-xl">
              <img
                src={AboutImage}
                alt="Ranit Ghosh - Full Stack Developer"
                className="w-48 rounded-full h-48 object-cover border-4 border-primary"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3 md:px-8">
            <div className="text-[#333333]">
              <p className="mb-4 text-justify">
                Hi, I'm <strong>Ranit Ghosh</strong>, a passionate{" "}
                <strong>Full Stack Developer</strong> with expertise in{" "}
                <strong>React</strong>, <strong>Node.js</strong>,{" "}
                <strong>MongoDB</strong>, and <strong>Express.js</strong>. From
                creating my first portfolio to developing full-stack web
                applications, I've always been excited about leveraging
                technology to create impactful solutions.
              </p>
              <p className="mb-4 text-justify">
                My journey in software development began with HTML and CSS, but
                it was when I learned JavaScript and the power of{" "}
                <strong>React</strong> that my passion for web development truly
                ignited. I specialize in building scalable and performant web
                applications with a strong focus on user experience and clean,
                maintainable code.
              </p>
              <p className="mb-4 text-justify">
                Currently, I am working as a part of a collaborative team at <strong>TCS</strong>.
                I enjoy contributing to open-source projects and always seek
                opportunities to learn and grow as a developer.
              </p>
              <p className="text-justify ">
                When I'm not developing web applications, you’ll find me
                fine-tuning my motorcycle, exploring off-road trails, or
                organizing spaces to create a productive environment. I also
                enjoy occasional games with good company and dabble in SEO
                and UI/UX research to stay informed on modern digital trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
