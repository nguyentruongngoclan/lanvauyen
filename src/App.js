import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Experience from "./pages/Experience";
import Rsvp from "./pages/Rsvp";
import Travel from "./pages/Travel";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/lanvauyen" element={<Home />}></Route>
          <Route path="/our_story" element={<OurStory />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/travel" element={<Travel />}></Route>
          <Route path="/rsvp" element={<Rsvp />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
