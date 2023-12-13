// Importing components 
import Navbar from './components/Navbar';
import General from './components/General'; 
import Education from './components/Education';
import Experience from './components/Experience';
import Resume from './components/Resume';

// Importing stylesheet
import './styles/app.css'; 

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="addInfo">
          <General />
          <Education />
          <Experience />
        </section>
        <section className="seeInfo">
          <Resume />
        </section>  
      </main>
    </>
  )
}

export default App;
