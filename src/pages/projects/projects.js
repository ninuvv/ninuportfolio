import React from "react";
import "./projects.css";
import { motion } from "framer-motion";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
     <h1 className="text-center font-details-b text-white">PROJECTS</h1>

      <div className="projects-container">
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
         
            <div className="project-images" id="classapp"></div>
         
          <div className="project-links">
            <div className="text">
              <h3>Classroom Mangement</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ninuvv/Nodejs-class-romm-mgmt-system.git"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://indianschoolweb.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* // */}

        {/* Project - Todo List */}
        {<motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
         
            <div className="project-images" id="todoList"></div>
        

          <div className="project-links">
            <div className="text">
              <h3>e-commerce</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/ninuvv/Shopping.git"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://github.com/ninuvv/Shopping.git"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div> }
      </div>
      {/* // */}

      {/* // */}
      {/* Project - Developerfolio */}
      {/* <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://developer-junaid.web.app/"
          >
            <div className="project-images" id="devFolio"></div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Developer Portfolio (DevFolio)</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/developer-junaid/DeveloperFolio"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://developer-junaid.web.app/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div> */}
      {/* // */}
      {/* </div> */}
    </section>
  );
};

export default Portfolio;
