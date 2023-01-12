import {
  BrowserRouter as Router,
  Routes as ReactRoutes,
  Route,
} from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Board } from "../Board";

export const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<Board />} />
      </ReactRoutes>
    </Router>
  );
};
