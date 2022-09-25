import './App.css';
import Navbar from './components/Navbar';
import TestCard from './components/TestCard';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='news-box'>
          <h1>
            TESTYWOJSKOWE.PL
          </h1>
          <h2>
            System służący do pomocy w nauce z wielu dziedzin w tym zagadnień z zakresu ogólnowojskowego.
          </h2>
          <p>
            "Trening jest formą szkolenia żołnierzy i pododdziałów polegającą na systematycznym ćwiczeniu czynności sensorycznych ... dla uzyskania określonego poziomu wyszkolenia indywidualnego lub zespołowego" - Instrukcja o działaności Szkoleniowo-Metodycznej
          </p>
        </div>
        <TestCard
          title="MONO test"
          description="Generator testów ogólnowojskowych. Egzaminy na szkoły podoficerskie" />
        <TestCard
          title="Własne testy"
          description='Testy tworzone przez użytkowników z wiedzy wszelakiej' />
        <TestCard
          title="IRONMAN"
          description='Wiedza ogólnowojskowa. Pytania ciągną się bez końca dopóki nie dasz ciała' />
        <TestCard
          title="Egzamin z WF"
          description='Kalkulator Wojskowego rocznego egzaminu z WF' />
        <TestCard
          title="DISCORD"
          description='Dołącz do społeczności i wymieniaj się doświadczeniem.' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
