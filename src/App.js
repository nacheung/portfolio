import './App.css';
import { useRoutes } from "react-router-dom";
import Homepage from "./pages/home/homepage";

const App = () => {
  const routes = useRoutes([
      { path:"/portfolio", element: <Homepage />},
  ]);

  return routes;
};




export default App;
