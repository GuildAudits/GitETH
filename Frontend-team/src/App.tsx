// import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import MainApp from "./pages/mainApp";

function App() {


  return (
    <>
      <Routes>
        <Route element={<LandingPage/>} path="/"/>
        <Route element={<MainApp/>} path="/app"/>
      </Routes>
    </>
  )
}

export default App
