import './App.css';
import MainContent from './MainContent';
import Biography from './Biography';
import Projects from './Projects';



function App() {

  return (
    <div className="flex flex-col min-h-screen relative ">
      {/* Contenido principal */}
      <MainContent >
        <Biography />
      </MainContent>
      <MainContent>
        <Projects />
      </MainContent>


    </div>
  );
}

export default App;
