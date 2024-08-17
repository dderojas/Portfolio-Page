type NavbarProps = {
  setView: (view: string) => void;
  view: string;
}


export const Navbar = ({ setView, view }: NavbarProps) => {
  const something = "bg-gradient-to-r from-slate-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
  const selectedTab = 'bg-black'

  return (
    <>
      <nav className="py-10 mb-12 flex justify-end dark:text-white">
          <ul className="flex items-center">
          <li>
              <a
                className={view === 'home' ? selectedTab : something}
                onClick={() => setView('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={view === 'resume' ? selectedTab : something}
                onClick={() => setView('resume')}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className={view === 'projects' ? selectedTab : something}
                onClick={() => setView('projects')}
              >
                Personal Projects
              </a>
            </li>
            <li>
              <a
                className={view === 'contact' ? selectedTab : something}
                onClick={() => setView('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar