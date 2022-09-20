import './App.scss';
import Backdrop from './components/Backdrop';
import HeaderBar from './components/HeaderBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Backdrop />
      <HeroSection />
    </div>
  );
}

export default App;
