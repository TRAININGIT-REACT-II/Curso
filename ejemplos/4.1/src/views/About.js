import Me from "./Me";
import Course from "./Course";
import { useRouteMatch } from "react-router";
import { Route, NavLink } from "react-router-dom";

/**
 * Una pagina con subpaginas
 */
const About = () => {
  const match = useRouteMatch();

  return <section aria-labelledby="about-title">
    <h4 id="about-title">Sobre el curso</h4>
    <p>Pulsa para ver más detalle.</p>
    <nav className="secondary">
      <NavLink activeClassName="active" to={`${match.url}/me`}>Sobre mi</NavLink>
      {' '}
      <NavLink activeClassName="active" to={`${match.url}/course`}>Sobre este curso</NavLink>
    </nav>
    <Route path={`${match.url}/me`} component={Me}/>
    <Route path={`${match.url}/course`} component={Course}/>
  </section>
};

export default About;