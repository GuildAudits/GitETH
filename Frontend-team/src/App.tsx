// import './App.css'
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import MainApp from "./pages/mainApp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
  /**
   * App component renders the main application layout.
   *
   * It includes the Navbar, Routes for landing page and main app, and the Footer.
   *
   * The container element has a dark gradient background and is set to at least
   * the height of the viewport.
   *
   * @returns {JSX.Element} The App component JSX
   */

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
