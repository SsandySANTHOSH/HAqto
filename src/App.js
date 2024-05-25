import './App.css';
import Header from './components/Header';
import MoviBooking from './components/MoviBooking';
import Navbar from './components/Navbar';
import Appcart from './Appcart'

function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Header/>
     <Appcart />
     <MoviBooking />
    </div>
  );
}

export default App;
