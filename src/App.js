import './App.scss';
import Backdrop from './components/Backdrop';
import Carousel from './components/Carousel';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Backdrop />
      <Carousel />
    </div>
  );
}

export default App;
