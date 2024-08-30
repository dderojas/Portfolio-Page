import { useState } from 'react'
import { Navbar, Home, Resume, Projects, Contact } from './components'
import './App.css'

type ViewsType = {
  [key:string]: JSX.Element;
}

const App = () => {
  const [view, setView] = useState('home')

  const views: ViewsType = {
    home: <Home />,
    resume: <Resume />,
    projects: <Projects />,
    contact: <Contact />
  }
  
  return (
    <>
      <header className='fixed p-5 w-full bg-black top-0 left-0 right-0'>
        <Navbar setView={setView} view={view} />
      </header>
      {/* <main className="bg-white p-10 dark:bg-gray-900 md:px-20 lg:px-40"> */}
        {views[view]}
      {/* </main> */}
    </>
  )
}

export default App
