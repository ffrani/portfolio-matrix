import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import "./Hero.css";

// About modal
const AboutModalContent = ({ age }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-primary">
      about_me:${""}
      <span className="blinking" style={{ fontWeight: 400 }}>
        _
      </span>
    </h2>
    <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
      <p className="mb-6 text-white text-left text-lg sm:text-xl">
        I&apos;m Filip, a <span className="text-primary">{age}</span> years old
        self-taught Frontend developer who loves to code!
        <br />
        <br />
        Technologies I use include:
        <br />
        React.js, JavaScript (ES6), HTML, CSS, Sass, Tailwind, Bootstrap, MUI,
        AJAX, MySQL, CSS Flexbox/Grid, Node.js, Git, GitLab, GitHub, npm, yarn.
        <br />
        <br />
        Technologies I am currently getting knowledgeable at: TypeScript, Vue.js
      </p>
    </div>
  </div>
);

AboutModalContent.propTypes = {
  age: PropTypes.number.isRequired, // Validate 'age' prop as a required number
};

// Projects modal
const ProjectsModalContent = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-primary">
      personal_projects:${""}
      <span className="blinking" style={{ fontWeight: 400 }}>
        _
      </span>
    </h2>
    <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
      <div className="pl-4">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://www.laiout.co/">/laiout.co website and webapp</a>
          </li>
        </ul>
        <p className="text-white text-left">
          I was working on this website during 6 months of internship as a
          Frontend developer at laiout.co.
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/crypto-tracker-app/">
              /crypto_tracker_app
            </a>
          </li>
        </ul>
        <p className="text-white text-left">
          Keep track of your favorite crypto currencies.
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/expense-tracker-app/">
              /expense_tracker_app
            </a>
          </li>
        </ul>
        <p className="text-white text-left">
          With this web-app you can keep track of your expenses.
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/pokemon-card-app/">
              /pokemon_card_app
            </a>
          </li>
        </ul>
        <p className="text-white text-left">Search your favorite pokemon.</p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/guess-a-number-game/">
              /guess_a_number
            </a>
          </li>
        </ul>
        <p className="text-white text-left">
          Guess a number from 1 to 20, the less tries you take, the higher the
          score. You have five tries. Make them count!
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/bank-app/">/bank_app</a>
          </li>
        </ul>
        <p className="text-white text-left">
          Arrays, Numbers, Dates, Timers.. Bank app for tracking and managing
          the users account Fake &quot;log in&quot; with: User &quot;ff&quot;
          and PIN &quot;1111&quot;
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/bank-website/">/bank_website</a>
          </li>
        </ul>
        <p className="text-white text-left">
          DOM Manipulation, Events.. Minimalistic fake bank website
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/fastest-to-100-game/">
              /fastest_to_100
            </a>
          </li>
        </ul>
        <p className="text-white text-left">
          DOM Manipulation, Game logic implementation, Event listeners.. Two
          player game where the goal is to reach a 100 points before your
          opponent
        </p>
      </div>

      <div className="pl-4 pt-3">
        <ul>
          <li className="text-left pb-1 text-primary">
            <a href="https://ffrani.github.io/mapty/">/mapty</a>
          </li>
        </ul>
        <p className="text-white text-left">
          Object Oriented Programming, Geolocation, APIs.. An app that tracks
          user workouts/trips using their geolocation.
        </p>
      </div>
    </div>
  </div>
);

// Contact modal
const ContactModalContent = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-primary">
      contact_me:${""}
      <span className="blinking" style={{ fontWeight: 400 }}>
        _
      </span>
    </h2>
    <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
      <p className="mb-6 text-white text-left text-lg sm:text-xl">
        Feel free to contact me through any of the following channels:
        <br />
        <br />
        Email: ff.franic@gmail.com
        <br />
        Phone: +47 46 55 56 54
      </p>
    </div>
  </div>
);

const Hero = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("useEffect executed");
    const interval = setInterval(() => {
      const currentDate = new Date();
      const nanoYear = 365.25 * 24 * 3600000;
      const calculatedAge = (
        (currentDate - Date.parse("1993-04-26")) /
        nanoYear
      ).toFixed(10);
      setAge(calculatedAge);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const [modals, setModals] = useState([
    {
      name: "About",
      isOpen: false,
    },
    {
      name: "Projects",
      isOpen: false,
    },
    {
      name: "Contact",
      isOpen: false,
    },
  ]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container text-center">
        <style>
          {`
                    .custom-scrollbar {
                      scrollbar-width: thin;
                      scrollbar-color: #4b4b4b #2c2c2c;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                      width: 12px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                      background: #2c2c2c;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                      background: #4b4b4b;
                      border-radius: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                      background: #555;
                    }
                  `}
        </style>

        {/* Render modals */}
        <ul className="flex flex-row items-center justify-center text-primary text-2xl pb-5">
          {modals.map((modal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="flex items-center"
            >
              <li
                onClick={() => {
                  const updatedModals = [...modals];
                  updatedModals[index].isOpen = !modal.isOpen;
                  setModals(updatedModals);
                }}
                className={`cursor-pointer ${
                  modal.name === "Projects" || modal.name === "Contact"
                    ? "pl-4"
                    : ""
                }`}
              >
                /{modal.name.toLowerCase()}
              </li>
            </motion.div>
          ))}
        </ul>

        {/* Render modal content */}
        <AnimatePresence>
          {modals.map(
            (modal, index) =>
              modal.isOpen && (
                <motion.div
                  key={index}
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
                    {/* Render modal content based on selected modal */}
                    {modal.name === "About" && <AboutModalContent age={age} />}
                    {modal.name === "Projects" && <ProjectsModalContent />}
                    {modal.name === "Contact" && <ContactModalContent />}
                    <button
                      onClick={() => {
                        const updatedModals = [...modals];
                        updatedModals[index].isOpen = false;
                        setModals(updatedModals);
                      }}
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
              )
          )}
        </AnimatePresence>

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
