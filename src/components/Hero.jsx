import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import "./Hero.css";

const Hero = () => {
  const [openAboutModal, setOpenAboutModal] = useState(false);
  const [openProjectsModal, setOpenProjectsModal] = useState(false);
  const [openContactModal, setOpenContactModal] = useState(false);
  const [age, setAge] = useState(0);

  const handleOpenAboutModal = () => {
    setOpenAboutModal(true);
  };

  const handleCloseAboutModal = () => {
    setOpenAboutModal(false);
  };

  const handleOpenProjectsModal = () => {
    setOpenProjectsModal(true);
  };

  const handleCloseProjectsModal = () => {
    setOpenProjectsModal(false);
  };

  const handleOpenContactModal = () => {
    setOpenContactModal(true);
  };

  const handleCloseContactModal = () => {
    setOpenContactModal(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpenAboutModal(false);
        setOpenProjectsModal(false);
        setOpenContactModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const nanoYear = 365.25 * 24 * 3600000;
      const age = ((currentDate - Date.parse("1993-04-26")) / nanoYear).toFixed(
        10
      );
      setAge(age);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container text-center">
        <ul className="flex flex-row items-center justify-center text-primary text-2xl pb-5">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex items-center"
          >
            <li onClick={handleOpenAboutModal} className="cursor-pointer">
              /about
            </li>
          </motion.div>

          <AnimatePresence>
            {openAboutModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-black w-full sm:w-1/2 lg:w-1/3 rounded-lg p-8 relative px-3"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    about_me:$
                    <span className="blinking" style={{ fontWeight: 400 }}>
                      _
                    </span>
                  </h2>
                  <p className="mb-6 text-white text-left text-lg sm:text-xl">
                    I&apos;m Filip, a{" "}
                    <span className="text-primary">{age}</span> years old
                    self-taught Frontend developer who loves to code!
                    <br />
                    <br />
                    Technologies I use include:
                    <br />
                    React.js, JavaScript (ES6), HTML, CSS, Sass, Tailwind,
                    Bootstrap, MUI, AJAX, MySQL, CSS Flexbox/Grid, Node.js, Git,
                    GitLab, GitHub, npm, yarn.
                    <br />
                    <br />
                    Technologies I am currently getting knowledgeable at:
                    TypeScript, Vue.js
                  </p>
                  <button
                    onClick={handleCloseAboutModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex items-center"
          >
            <li
              onClick={handleOpenProjectsModal}
              className="pl-4 cursor-pointer"
            >
              /projects
            </li>
          </motion.div>

          <AnimatePresence>
            {openProjectsModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-black w-full sm:w-1/2 lg:w-1/3 rounded-lg p-8 relative px-2"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    personal_projects:${""}
                    <span className="blinking" style={{ fontWeight: 400 }}>
                      _
                    </span>
                  </h2>
                  {/* Projects content goes here */}
                  <button
                    onClick={handleCloseProjectsModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="flex items-center"
          >
            <li
              onClick={handleOpenContactModal}
              className="pl-4 cursor-pointer"
            >
              /contact
            </li>
          </motion.div>

          <AnimatePresence>
            {openContactModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 px-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="bg-black w-full sm:w-1/2 lg:w-1/3 rounded-lg p-8 relative px-2"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    contact_me:${""}
                    <span className="blinking" style={{ fontWeight: 400 }}>
                      _
                    </span>
                  </h2>
                  {/* Contact content goes here */}
                  <button
                    onClick={handleCloseContactModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>

        <h1 className="text-primary text-5xl lg:text-7xl md:text-7xl sm:text-6xl pb-5">
          filip_frani:${""}
          <span className="blinking" style={{ fontWeight: 400 }}>
            _
          </span>
        </h1>
        <p className="text-white text-2xl pb-5">Find me in the Matrix</p>
        <ul className="text-primary text-2xl underline">
          <li>
            <a href="https://github.com/ffrani">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/filip-franicevic/">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.facebook.com/filip.franicevic">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/flikas22/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
