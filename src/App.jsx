
import './App.css'
import home from './assets/home.png'
import about from './assets/about.png'
import html from './assets/HTML-logo.png'
import css from './assets/CSS-logo.png'
import js from './assets/js-logo.png'
import bootstrap from './assets/Bootstrap-logo.png'
import tailwind from './assets/TailwindCSS-logo.png'
import react from './assets/React-logo.png'

function App() {


  return (
    <>
      <div className="wrapper">

        <section className='NavBar '>
          <div className="nav flex justify-between shadow-md shadow-gray-800 p-5 fixed w-full">
            <div className="logo text-2xl">
              <p>
                <i className="fa-solid fa-angle-left"></i>  Shruti  <i className="fa-solid fa-angle-right"></i>
              </p>
            </div>

            <div className="list">
              <ul className='flex gap-8 text-2xl  '>
                <li className="hover:cursor-pointer"><a href="#home">Home</a></li>
                <li className="hover:cursor-pointer"><a href="#about">About</a></li>
                <li className="hover:cursor-pointer"><a href="#skill">Skill</a></li>
                <li className="hover:cursor-pointer">Project</li>
                <li className="hover:cursor-pointer">Certificate</li>
                <li className="hover:cursor-pointer">Contact</li>
              </ul>
            </div>

            <div className="ContactButton bg-[#312E81] p-3 rounded-full font-bold ">
              <button>Contact Me</button>
            </div>

          </div>
        </section>

        <section className='Home-section flex p-30 justify-evenly' id='home' >
          <div className="imgPart">
            <img className='hover:scale-110 delay-150 duration-300 ' src={home} alt="" />
          </div>

          <div className="text-part mt-40  w-[900px]">

            <h1 className='text-6xl font-bold'>Hi , I'm  <span className='text-purple-800'>Shruti</span> 👋 </h1>
            <h1 className='text-3xl font-bold mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>Full Stack Web Developer</h1>
            <p className='w-[550px] mt-5'> I am a passionate Full Stack Web Developer who loves creating modern and responsive websites. I have skills in HTML, CSS, JavaScript, and React, and I am always excited to learn new technologies and build creative projects.</p>
            <div className="homeButton mt-5">
              <button className='bg-purple-900 py-3 m-1 rounded-full px-7 hover:cursor-pointer hover:scale-110 delay-150 duration-100 '>View Projects</button>
              <button className='bg-purple-900 py-3 m-1 rounded-full px-7 hover:cursor-pointer hover:scale-110 delay-150 duration-100'> Download Resume</button>
            </div>
          </div>
        </section>

        <section className='About-section flex p-30 justify-evenly mt-[80px]' id='about' >
          <div className="text-part mt-30   w-[700px]">

            <h1 className='text-6xl font-bold'>More <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">About Me</span>  </h1>
            <h1 className='text-2xl font-bold mt-4 text-purple-500'>Full Stack Web Developer</h1>
            <p className='w-[550px] mt-5'> I am a passionate and creative Full Stack Web Developer who enjoys building modern, responsive, and user-friendly websites. I have experience with HTML, CSS, JavaScript, React, and Tailwind CSS. As a fresher, I am eager to learn new technologies, improve my skills, and contribute to real-world projects.</p>
            <div className="cards mt-5 flex gap-5">

              <div className="card1 bg-purple-800 flex-row w-[400px] p-3 text-center rounded-xl hover:cursor-pointer ">
                <p className='text-4xl'>🎓</p>
                <p className='mt-4'>Bachelor of Computer Science</p>
              </div>

              <div className="card1 bg-purple-800 flex-row w-[400px] p-3 text-center rounded-xl hover:cursor-pointer">
                <p className='text-4xl'>💻</p>
                <p className='mt-4'>Full Stack Web Developer</p>
              </div>
              <div className="card1 bg-purple-800 flex-row w-[400px] p-3 text-center rounded-xl hover:cursor-pointer">
                <p className='text-4xl'>🚀</p>
                <p className='mt-4'>Fresher Open to Opportunities</p>
              </div>

              <div className="card1 bg-purple-800 flex-row w-[400px] p-3 text-center rounded-xl hover:cursor-pointer">
                <p className='text-4xl'>📍</p>
                <p className='mt-4'>Rajkot , Gujarat India </p>
              </div>

            </div>
          </div>
          <div className="imgPart">
            <img className='hover:scale-110 delay-150 duration-300 h-[600px]' src={about} alt="" />
          </div>
        </section>

        <section className='Skill-section' id='skill'>
          <h1 className='text-6xl font-bold mt-[100px] text-center'>My Skill & <span className='bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent'>Abilities</span> </h1>
          <p className='text-center mt-5'>Technologies I use to build modern and responsive web applications.</p>

          <div className="Skills-Cards mt-10">
            <div className="Skills-Card flex justify-center gap-10">
              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={html} alt="" />
                <h2 className="text-xl font-bold mt-5"> HTML </h2>
                <p className="text-purple-400 mt-2">  95% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={css} alt="" />
                <h2 className="text-xl font-bold mt-5"> CSS </h2>
                <p className="text-purple-400 mt-2">  95% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>
              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={js} alt="" />
                <h2 className="text-xl font-bold mt-5"> JavaScript </h2>
                <p className="text-purple-400 mt-2">  84% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[84%]"></div>
                </div>
              </div>
            </div>

            <div className="Skills-Card flex justify-center gap-10 mt-10">
              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={bootstrap} alt="" />
                <h2 className="text-xl font-bold mt-5"> Bootstrap </h2>
                <p className="text-purple-400 mt-2">  80% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={tailwind} alt="" />
                <h2 className="text-xl font-bold mt-5">Tailwind CSS </h2>
                <p className="text-purple-400 mt-2">  95% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div className="Skills-Card1 border p-5 rounded-xl w-[200px] text-center hover:-translate-y-2 delay-150 duration-300">
                <img className='h-20 ml-8' src={react} alt="" />
                <h2 className="text-xl font-bold mt-5"> React JS </h2>
                <p className="text-purple-400 mt-2">  50% </p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 h-2 rounded-full w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='Project-section'>

          <p className='text-6xl text-center font-bold mt-[150px]'>My Projects</p>

          <div className="line  ">
            <p className=' ml-[60rem] mt-20 w-1 bg-red-200 h-[500px] rounded-full'></p>

           
          </div>
        </section>

      </div>
    </>
  )
}

export default App
