import { AiFillLinkedin, AiOutlineGithub  } from 'react-icons/ai'
import './App.css'

function App() {

  return (
    <>
<div>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-end dark:text-white">
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-slate-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-slate-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Personal Projects
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Don de Rojas
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Software Engineer
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I'm a full-stack software engineer with a passion for collaborative and creative problem solving
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <AiFillLinkedin />
                <AiOutlineGithub />
              </div>
            </div>
            <img src={'../public/profile-photo.png'} className="rounded-full h-80 w-80"/>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
