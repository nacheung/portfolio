import './App.css';
import { useRoutes } from "react-router-dom";
import Aboutpage from './pages/about/aboutpage';
import Homepage from './pages/home/homepage';
import Resumepage from './pages/resume/resumepage';
import Contactpage from './pages/contact/contactpage';


const App = () => {
  const routes = useRoutes([
      { path:"/portfolio", element: <Homepage />},
      { path:"/portfolio/about", element: <Aboutpage />},
      { path:"/portfolio/resume", element: <Resumepage />},
      { path:"/portfolio/contact", element: <Contactpage />},
  ]);

  return routes;
};




export default App;
