// import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import MainApp from "./pages/mainApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {


  return (
    <div className="min-h-screen bg-dark-gradient text-white relative overflow-hidden">
      <Navbar />
      <Routes>
        <Route element={<LandingPage/>} path="/"/>
        <Route element={<MainApp/>} path="/app"/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
