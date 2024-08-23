import { AiFillLinkedin, AiOutlineGithub  } from 'react-icons/ai'

const Home = () => {
  
  return (
    <>
      <div className="flex py-10">
        <div className="text-center p-10 py-10 border-b-2 border-black w-full">
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
            <a href='https://www.linkedin.com/in/dderojas/' className='text-black hover:text-black'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/dderojas' className='text-black hover:text-black'>
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <img src={'../public/profile-photo.png'} className="rounded-full h-80 w-80 mt-4"/>
      </div>
      <div>
        <h1>About Me</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  )
}

export default Home