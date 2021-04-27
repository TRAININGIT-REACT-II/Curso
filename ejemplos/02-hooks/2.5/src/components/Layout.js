import "./Layout.css";
import ThemeToggle from "./ThemeToggle";

/**
 * Engloba el contenido principal en un contendor para 
 * centrar el layout
 */
const Layout = ({ title, children }) => (
  <div className="layout">
    <header className="layout_header">
      <h1>{title}</h1>
      <div className="layout_opts">
        <div className="layout_theme">
          <ThemeToggle />
        </div>
        <nav className="layout_nav">
          <ul>
            <li>
              <a href="https://github.com/TRAININGIT-REACT-II/Curso" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      {children}
    </main>
  </div>
);

export default Layout;