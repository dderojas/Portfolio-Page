type NavbarProps = {
  setView: (view: string) => void;
  view: string;
}


export const Navbar = ({ setView, view }: NavbarProps) => {
  const something = "bg-gradient-to-r from-slate-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
  const selectedTab = 'bg-purple-900 text-white px-4 py-2 border-none rounded-md ml-8'

  return (
    <>
      <nav className="flex justify-end dark:text-white">
        <ul className="flex">
          <li>
            <button
              className={view === 'home' ? selectedTab : something}
              onClick={() => setView('home')}
            >
              Home
            </button>
          </li>
            <li>
              <button
                className={view === 'resume' ? selectedTab : something}
                onClick={() => setView('resume')}
              >
                Resume
              </button>
            </li>
            <li>
            <button
              className={view === 'projects' ? selectedTab : something}
              onClick={() => setView('projects')}
            >
              Personal Projects
            </button>
            </li>
            <li>
            <button
              className={view === 'contact' ? selectedTab : something}
              onClick={() => setView('contact')}
            >
              Contact
            </button>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar