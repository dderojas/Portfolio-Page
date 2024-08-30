import { AiOutlineGithub, AiOutlineExpand  } from 'react-icons/ai'


const Projects = () => {
  
  return (
    <>
      <div className="text-center p-10 border-b-2 border-black w-full">
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Professional Experience</h3>
        <div>CDK Global</div>
        <div>GoodLeap</div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Projects</h3>
        <div className='my-7'>
          <div className="bg-slate-800 text-white p-3">
            <h2>Issues Tracker</h2>
          </div>
          <div>
            <img src={'../public/placeholder.jpg'} className=" h-80 w-full"/>
          </div>
          <footer className='flex justify-between p-3 bg-slate-400'>
            <AiOutlineGithub />
            <AiOutlineExpand />
          </footer>
        </div>
        <div className='my-7'>
          <div className="bg-slate-800 text-white p-3">
            <h2>Wordle</h2>
          </div>
          <div>
            <img src={'../public/placeholder.jpg'} className=" h-80 w-full"/>
          </div>
          <footer className='flex justify-between p-3 bg-slate-400'>
            <AiOutlineGithub />
            <AiOutlineExpand />
          </footer>
        </div>
      </div>
    </>
  )
}

export default Projects