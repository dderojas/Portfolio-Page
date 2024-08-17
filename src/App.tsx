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
    <div>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar setView={setView} view={view} />
          {views[view]}
        </section>
      </main>
    </div>
    </>
  )
}

export default App
