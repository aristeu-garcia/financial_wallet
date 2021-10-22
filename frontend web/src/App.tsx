import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Global from "./styles/global";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "../../hooks/Auth";
import ToastContainer from "./components/Toast";
import AppProvider from "./hooks";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <Global />
    </Router>
  );
};

export default App;
