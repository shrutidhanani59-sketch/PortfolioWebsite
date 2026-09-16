import "./App.css";
import home from "./assets/home.png";
import about from "./assets/about.png";
import html from "./assets/HTML-logo.png";
import css from "./assets/CSS-logo.png";
import js from "./assets/js-logo.png";
import bootstrap from "./assets/Bootstrap-logo.png";
import tailwind from "./assets/TailwindCSS-logo.png";
import react from "./assets/React-logo.png";
import resume from './assets/Shruti-Resume.pdf'
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div
        className={`wrapper min-h-screen duration-500 ${
          darkMode
            ? "bg-[#070b17] text-white"
            : "bg-gray-50 text-gray-900"
        }`}
      >

        <section className="NavBar">
          <div
            className={`nav flex items-center justify-between shadow-md px-4 md:px-8 py-3 fixed top-0 left-0 z-50 w-full duration-500 ${
              darkMode
                ? "bg-[#070b17] text-white shadow-gray-800"
                : "bg-white text-gray-900 shadow-gray-300"
            }`}
          >
            {/* Logo */}

            <div className="logo text-xl md:text-2xl font-bold whitespace-nowrap">
              <p>
                <span className="text-purple-400">&lt;</span>
                {" "}Shruti{" "}
                <span className="text-purple-400">/&gt;</span>
              </p>
            </div>

            {/* Navigation */}

            <div className="list hidden md:block">
              <ul className="flex items-center gap-4 lg:gap-7 text-sm lg:text-base font-medium">
                <li className="hover:text-purple-400 duration-300">
                  <a href="#home">Home</a>
                </li>

                <li className="hover:text-purple-400 duration-300">
                  <a href="#about">About</a>
                </li>

                <li className="hover:text-purple-400 duration-300">
                  <a href="#skill">Skill</a>
                </li>

                <li className="hover:text-purple-400 duration-300">
                  <a href="#project">Project</a>
                </li>

                <li className="hover:text-purple-400 duration-300">
                  <a href="#certificate">Certificate</a>
                </li>

                <li className="hover:text-purple-400 duration-300">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Right Side */}

            <div className="right flex items-center gap-3">
              <a
                href="#contact"
                className="hidden lg:block bg-gradient-to-r from-purple-700 to-pink-600 px-5 py-2 rounded-full font-semibold text-white hover:scale-105 duration-300"
              >
                Contact Me
              </a>

              {/* Theme Button */}

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-10 rounded-full flex items-center justify-center border duration-300 hover:scale-110 ${
                  darkMode
                    ? "border-gray-600 bg-gray-800 hover:bg-gray-700"
                    : "border-gray-300 bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {darkMode ? (
                  <i className="fa-solid fa-sun text-yellow-400"></i>
                ) : (
                  <i className="fa-solid fa-moon text-purple-700"></i>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ================= HOME ================= */}

        <section
          className="Home-section relative min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20 px-6 md:px-10 lg:px-20 pt-32 pb-20 overflow-hidden"
          id="home"
        >
          {/* Background Glow */}

          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-purple-700/20 blur-[120px] rounded-full top-20 left-[-100px]"></div>

          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-pink-600/10 blur-[120px] rounded-full bottom-10 right-[-100px]"></div>

          {/* Home Image */}

          <div className="imgPart relative flex justify-center items-center z-10">
            <div className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[370px] md:h-[370px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-purple-600/30 blur-2xl"></div>

            <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[410px] lg:h-[410px] rounded-full border border-purple-500/30"></div>

            <img
              className="relative z-10 w-[220px] sm:w-[280px] md:w-[350px] lg:w-[430px] hover:scale-105 duration-500"
              src={home}
              alt="Shruti - Full Stack Web Developer"
            />
          </div>

          {/* Home Text */}

          <div className="text-part relative z-10 w-full lg:w-[650px] text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for Opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Shruti
              </span>
              <span className="inline-block ml-2">👋</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5">
              <span
                className={
                  darkMode ? "text-gray-300" : "text-gray-700"
                }
              >
                Full Stack
              </span>{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Web Developer
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-7 mt-6 max-w-[600px] mx-auto lg:mx-0 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I create modern, responsive and user-friendly web applications
              using React, JavaScript and Tailwind CSS. I enjoy turning
              creative ideas into clean and interactive digital experiences.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#project"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-purple-700 to-pink-600 font-semibold text-white shadow-lg shadow-purple-900/30 hover:scale-105 duration-300"
              >
                View My Projects
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>

              <a
  href={resume}
  target="_blank"
  rel="noreferrer"
  className="px-7 py-3 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-700/20 hover:border-purple-400 hover:scale-105 duration-300"
>
  View Resume

  <i className="fa-solid fa-file-pdf ml-2"></i>
</a>
            </div>

            {/* Stats */}

            <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-10">
              <div>
                <h3 className="text-2xl font-bold">06+</h3>
                <p
                  className={
                    darkMode
                      ? "text-gray-500 text-xs mt-1"
                      : "text-gray-600 text-xs mt-1"
                  }
                >
                  Projects
                </p>
              </div>

              <div
                className={
                  darkMode
                    ? "w-px h-10 bg-gray-700"
                    : "w-px h-10 bg-gray-300"
                }
              ></div>

              <div>
                <h3 className="text-2xl font-bold">05+</h3>
                <p
                  className={
                    darkMode
                      ? "text-gray-500 text-xs mt-1"
                      : "text-gray-600 text-xs mt-1"
                  }
                >
                  Technologies
                </p>
              </div>

              <div
                className={
                  darkMode
                    ? "w-px h-10 bg-gray-700"
                    : "w-px h-10 bg-gray-300"
                }
              ></div>

              <div>
                <h3 className="text-2xl font-bold">01+</h3>
                <p
                  className={
                    darkMode
                      ? "text-gray-500 text-xs mt-1"
                      : "text-gray-600 text-xs mt-1"
                  }
                >
                  Years Learning
                </p>
              </div>
            </div>

            {/* Social */}

            <div className="flex justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 duration-300 ${
                  darkMode ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 duration-300 ${
                  darkMode ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                href="#"
                className={`w-10 h-10 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-500 duration-300 ${
                  darkMode ? "border-gray-700" : "border-gray-300"
                }`}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          className="About-section relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-24 px-6 md:px-10 lg:px-20 py-24 lg:py-32 overflow-hidden"
          id="about"
        >
          {/* Glow */}

          <div className="absolute w-[300px] h-[300px] bg-purple-700/20 blur-[120px] rounded-full top-20 right-[-100px]"></div>

          <div className="absolute w-[250px] h-[250px] bg-pink-600/10 blur-[100px] rounded-full bottom-10 left-[-100px]"></div>

          {/* Text */}

          <div className="text-part relative z-10 w-full lg:w-[650px] order-1 lg:order-2 text-center lg:text-left">
            <p className="text-purple-400 text-sm tracking-[4px] uppercase">
              Get To Know Me
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3">
              More{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold mt-5">
              <span
                className={
                  darkMode ? "text-gray-300" : "text-gray-700"
                }
              >
                Full Stack
              </span>{" "}
              <span className="text-purple-400">
                Web Developer
              </span>
            </h2>

            <p
              className={`text-sm sm:text-base leading-7 mt-6 max-w-[580px] mx-auto lg:mx-0 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I am a passionate and creative Full Stack Web Developer who
              enjoys building modern, responsive, and user-friendly web
              applications. I love turning ideas into interactive digital
              experiences using modern web technologies.
            </p>

            <p
              className={`text-sm sm:text-base leading-7 mt-4 max-w-[580px] mx-auto lg:mx-0 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I work with HTML, CSS, JavaScript, React and Tailwind CSS. As a
              fresher, I am continuously learning new technologies, improving
              my skills and looking forward to working on real-world projects.
            </p>

            {/* About Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-[580px] mx-auto lg:mx-0">
              {/* Card 1 */}

              <div
                className={`group p-4 rounded-2xl border backdrop-blur-sm hover:border-purple-500 hover:-translate-y-1 duration-300 ${
                  darkMode
                    ? "border-gray-700 bg-[#111427]/80"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <span className="text-xl">🎓</span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Education</p>
                    <p className="text-sm font-semibold">
                      Computer Science
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}

              <div
                className={`group p-4 rounded-2xl border backdrop-blur-sm hover:border-purple-500 hover:-translate-y-1 duration-300 ${
                  darkMode
                    ? "border-gray-700 bg-[#111427]/80"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Specialization
                    </p>

                    <p className="text-sm font-semibold">
                      Full Stack Development
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}

              <div
                className={`group p-4 rounded-2xl border backdrop-blur-sm hover:border-purple-500 hover:-translate-y-1 duration-300 ${
                  darkMode
                    ? "border-gray-700 bg-[#111427]/80"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Experience</p>

                    <p className="text-sm font-semibold">
                      Fresher
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}

              <div
                className={`group p-4 rounded-2xl border backdrop-blur-sm hover:border-purple-500 hover:-translate-y-1 duration-300 ${
                  darkMode
                    ? "border-gray-700 bg-[#111427]/80"
                    : "border-gray-200 bg-white shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-purple-600/20 flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Location</p>

                    <p className="text-sm font-semibold">
                      Rajkot, Gujarat
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}

            <div className="flex justify-center lg:justify-start gap-8 sm:gap-12 mt-10">
              <div>
                <h3 className="text-2xl font-bold">06+</h3>
                <p className="text-gray-500 text-xs mt-1">
                  Projects
                </p>
              </div>

              <div
                className={
                  darkMode
                    ? "w-px h-10 bg-gray-700"
                    : "w-px h-10 bg-gray-300"
                }
              ></div>

              <div>
                <h3 className="text-2xl font-bold">05+</h3>
                <p className="text-gray-500 text-xs mt-1">
                  Technologies
                </p>
              </div>

              <div
                className={
                  darkMode
                    ? "w-px h-10 bg-gray-700"
                    : "w-px h-10 bg-gray-300"
                }
              ></div>

              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-gray-500 text-xs mt-1">
                  Passion
                </p>
              </div>
            </div>
          </div>

          {/* About Image */}

          <div className="imgPart relative flex justify-center items-center order-2 lg:order-1">
            <div className="absolute w-[280px] h-[350px] sm:w-[350px] sm:h-[430px] bg-purple-600/20 blur-[70px] rounded-full"></div>

            <div
              className={`relative p-3 rounded-[40px] border backdrop-blur-sm ${
                darkMode
                  ? "border-purple-500/30 bg-white/5"
                  : "border-purple-200 bg-white shadow-xl"
              }`}
            >
              <img
                className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-[32px] hover:scale-105 duration-500"
                src={about}
                alt="About Shruti"
              />
            </div>

            {/* Badge */}

            <div
              className={`absolute -bottom-5 -right-2 sm:right-0 border rounded-2xl px-5 py-3 shadow-xl ${
                darkMode
                  ? "bg-[#111427] border-purple-500/40"
                  : "bg-white border-purple-200"
              }`}
            >
              <p className="text-purple-400 text-xs">Currently</p>

              <p className="font-semibold text-sm">
                Learning & Building 🚀
              </p>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section
          className="Skill-section px-6 md:px-10 lg:px-20 py-20 lg:py-32"
          id="skill"
        >
          <p className="text-purple-400 text-sm tracking-[4px] uppercase text-center">
            My Expertise
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 text-center">
            My Skill &{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Abilities
            </span>
          </h1>

          <p
            className={`text-center mt-5 text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies I use to build modern and responsive web
            applications.
          </p>

          <div className="Skills-Cards mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HTML */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img className="h-20" src={html} alt="HTML" />
              </div>

              <h2 className="text-lg font-bold mt-5">HTML</h2>

              <p className="text-purple-400 mt-2">95%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* CSS */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img className="h-20" src={css} alt="CSS" />
              </div>

              <h2 className="text-lg font-bold mt-5">CSS</h2>

              <p className="text-purple-400 mt-2">95%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* JavaScript */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img className="h-20" src={js} alt="JavaScript" />
              </div>

              <h2 className="text-lg font-bold mt-5">
                JavaScript
              </h2>

              <p className="text-purple-400 mt-2">84%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[84%]"></div>
              </div>
            </div>

            {/* Bootstrap */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img
                  className="h-20"
                  src={bootstrap}
                  alt="Bootstrap"
                />
              </div>

              <h2 className="text-lg font-bold mt-5">
                Bootstrap
              </h2>

              <p className="text-purple-400 mt-2">80%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>

            {/* Tailwind */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img
                  className="h-20"
                  src={tailwind}
                  alt="Tailwind CSS"
                />
              </div>

              <h2 className="text-lg font-bold mt-5">
                Tailwind CSS
              </h2>

              <p className="text-purple-400 mt-2">95%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
              </div>
            </div>

            {/* React */}

            <div
              className={`border p-6 rounded-2xl text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="flex justify-center">
                <img className="h-20" src={react} alt="React JS" />
              </div>

              <h2 className="text-lg font-bold mt-5">
                React JS
              </h2>

              <p className="text-purple-400 mt-2">50%</p>

              <div
                className={`w-full rounded-full h-2 mt-3 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[50%]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          className="Project-section px-6 md:px-10 lg:px-20 py-20 lg:py-32"
          id="project"
        >
          <div className="text-center">
            <p className="text-purple-400 text-sm tracking-[4px] uppercase">
              My Work
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              My{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p
              className={`text-sm mt-5 max-w-xl mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Some of the projects I have created using modern web
              development technologies.
            </p>
          </div>

          <div className="Projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">
            {/* Project 1 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80"
                  alt="Weather App"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  JavaScript Project
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Weather App
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A responsive weather application that displays
                  weather information according to the selected city.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    HTML
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    CSS
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    JavaScript
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                  alt="E-Commerce Website"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  Web Development
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  E-Commerce Website
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A modern e-commerce website with products, search,
                  categories, cart and local storage functionality.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    HTML
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    Tailwind
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    JavaScript
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
                  alt="Quiz App"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  JavaScript Project
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Quiz App
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  An interactive quiz application with questions,
                  timer, previous, next and final result functionality.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    HTML
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    CSS
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    JavaScript
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 4 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80"
                  alt="Task Manager"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  React Project
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Task Manager
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A React based task manager application for adding,
                  completing and managing daily tasks.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    React
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    Bootstrap
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 5 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                  alt="FoodieHub"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  Restaurant Website
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  FoodieHub
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A modern restaurant website with food categories,
                  popular dishes, offers and an order panel.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    HTML
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    Tailwind CSS
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 6 */}

            <div
              className={`group border rounded-2xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 duration-300 ${
                darkMode
                  ? "border-gray-700 bg-[#111427]"
                  : "border-gray-200 bg-white shadow-md"
              }`}
            >
              <div className="h-[210px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80"
                  alt="Portfolio Website"
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-purple-400 text-sm">
                  React Project
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Portfolio Website
                </h2>

                <p
                  className={`text-sm leading-6 mt-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  A professional portfolio website showcasing my
                  skills, projects, certificates and contact information.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    React
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    Tailwind CSS
                  </span>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 rounded-full bg-purple-800 text-white text-sm hover:bg-purple-600 duration-300">
                    Live Demo
                  </button>

                  <button
                    className={`px-4 py-2 rounded-full border text-sm hover:border-purple-500 hover:text-purple-400 duration-300 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATES ================= */}

        <section
          className="Certificate-section px-6 md:px-10 lg:px-20 py-20 lg:py-32"
          id="certificate"
        >
          {/* Heading */}

          <div className="text-center">
            <p className="text-purple-400 text-sm tracking-[4px] uppercase">
              My Achievements
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              My{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Certificates
              </span>
            </h1>

            <p
              className={`text-sm mt-5 max-w-xl mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Certificates and achievements that showcase my learning
              and development journey.
            </p>
          </div>

          {/* Certificate Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
            {/* Certificate 1 */}

            <div
              className={`group border rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "bg-[#111427] border-gray-700"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <div
                className={`w-full h-[180px] rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=900&q=80"
                  alt="Full Stack Web Development Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <i className="fa-solid fa-certificate text-2xl text-purple-400"></i>
                  </div>
                </div>

                <h2 className="text-xl font-bold mt-5">
                  Full Stack Web Development
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Red & White Skill Education
                </p>

                <button className="mt-5 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white duration-300">
                  View Certificate
                </button>
              </div>
            </div>

            {/* Certificate 2 */}

            <div
              className={`group border rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "bg-[#111427] border-gray-700"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <div
                className={`w-full h-[180px] rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                  alt="JavaScript Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <i className="fa-solid fa-award text-2xl text-purple-400"></i>
                  </div>
                </div>

                <h2 className="text-xl font-bold mt-5">
                  JavaScript Development
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  JavaScript Certification
                </p>

                <button className="mt-5 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white duration-300">
                  View Certificate
                </button>
              </div>
            </div>

            {/* Certificate 3 */}

            <div
              className={`group border rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-purple-500 duration-300 ${
                darkMode
                  ? "bg-[#111427] border-gray-700"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <div
                className={`w-full h-[180px] rounded-xl overflow-hidden ${
                  darkMode ? "bg-gray-900" : "bg-gray-100"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=900&q=80"
                  alt="React Certificate"
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                />
              </div>

              <div className="mt-6">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <i className="fa-brands fa-react text-2xl text-purple-400"></i>
                  </div>
                </div>

                <h2 className="text-xl font-bold mt-5">
                  React Development
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  React Development Certification
                </p>

                <button className="mt-5 px-5 py-2 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-700 hover:text-white duration-300">
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="Contact-section px-6 md:px-10 lg:px-20 py-20 lg:py-32"
          id="contact"
        >
          {/* Heading */}

          <div className="text-center">
            <p className="text-purple-400 text-sm tracking-[4px] uppercase">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Contact{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p
              className={`text-sm mt-5 max-w-xl mx-auto ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Have a project idea or want to work together? Feel free
              to reach out to me.
            </p>
          </div>

          {/* Contact Content */}

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
            {/* Left */}

            <div
              className={`border rounded-2xl p-8 md:p-10 ${
                darkMode
                  ? "bg-[#111427] border-gray-700"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <h2 className="text-3xl font-bold">
                Let's Work Together
              </h2>

              <p
                className={`leading-7 mt-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I am always interested in new opportunities, creative
                projects and collaborations. If you have an idea or
                project in mind, feel free to contact me.
              </p>

              {/* Email */}

              <div className="flex items-center gap-5 mt-8">
                <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-purple-400"></i>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>

                  <p className="font-semibold break-all">
                    shrutidhanani59@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}

              <div className="flex items-center gap-5 mt-6">
                <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center">
                  <i className="fa-solid fa-phone text-purple-400"></i>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone</p>

                  <p className="font-semibold">
                    +91 8511081684
                  </p>
                </div>
              </div>

              {/* Location */}

              <div className="flex items-center gap-5 mt-6">
                <div className="w-12 h-12 rounded-xl bg-purple-900/50 flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-purple-400"></i>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <p className="font-semibold">
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Social */}

              <div className="flex gap-4 mt-9">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-700 duration-300 ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-300"
                  }`}
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-700 duration-300 ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-300"
                  }`}
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>

                <a
                  href="#"
                  className={`w-11 h-11 rounded-full border flex items-center justify-center hover:bg-purple-700 hover:border-purple-700 duration-300 ${
                    darkMode
                      ? "border-gray-700"
                      : "border-gray-300"
                  }`}
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Right - Form */}

            <div
              className={`border rounded-2xl p-8 md:p-10 ${
                darkMode
                  ? "bg-[#111427] border-gray-700"
                  : "bg-white border-gray-200 shadow-md"
              }`}
            >
              <h2 className="text-2xl font-bold">
                Send Me a Message
              </h2>

              <form className="mt-7">
                {/* Name */}

                <div>
                  <label
                    className={
                      darkMode
                        ? "text-sm text-gray-400"
                        : "text-sm text-gray-600"
                    }
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full mt-2 px-5 py-3 rounded-xl border outline-none focus:border-purple-500 duration-300 ${
                      darkMode
                        ? "bg-[#080b16] border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                {/* Email */}

                <div className="mt-5">
                  <label
                    className={
                      darkMode
                        ? "text-sm text-gray-400"
                        : "text-sm text-gray-600"
                    }
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full mt-2 px-5 py-3 rounded-xl border outline-none focus:border-purple-500 duration-300 ${
                      darkMode
                        ? "bg-[#080b16] border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                {/* Subject */}

                <div className="mt-5">
                  <label
                    className={
                      darkMode
                        ? "text-sm text-gray-400"
                        : "text-sm text-gray-600"
                    }
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className={`w-full mt-2 px-5 py-3 rounded-xl border outline-none focus:border-purple-500 duration-300 ${
                      darkMode
                        ? "bg-[#080b16] border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  />
                </div>

                {/* Message */}

                <div className="mt-5">
                  <label
                    className={
                      darkMode
                        ? "text-sm text-gray-400"
                        : "text-sm text-gray-600"
                    }
                  >
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className={`w-full mt-2 px-5 py-3 rounded-xl border outline-none focus:border-purple-500 duration-300 resize-none ${
                      darkMode
                        ? "bg-[#080b16] border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    }`}
                  ></textarea>
                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white font-bold hover:scale-[1.02] duration-300"
                >
                  <i className="fa-solid fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}

        <footer
          className={`border-t py-8 text-center ${
            darkMode
              ? "border-gray-800"
              : "border-gray-200"
          }`}
        >
          <p
            className={
              darkMode
                ? "text-gray-500 text-sm"
                : "text-gray-600 text-sm"
            }
          >
            © 2026 Shruti. All Rights Reserved.
          </p>

          <p className="text-purple-400 text-sm mt-2">
            Built with React & Tailwind CSS 💜
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;