import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import OurStory from "./pages/OurStory";
import Experience from "./pages/Experience";
import Rsvp from "./pages/Rsvp";
import "./App.css"

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/our_story' element={<OurStory />}></Route>
          <Route path='/experience' element={<Experience />}></Route>
          <Route path='/rsvp' element={<Rsvp />}></Route>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
