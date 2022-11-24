import NavbarReact from './components/navbar';
import Landing from './components/landing';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';


function App() {
  return (
    <div>
      <NavbarReact sticky="top" />
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
