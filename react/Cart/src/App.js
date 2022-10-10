import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import{Routes,Route} from 'react-router-dom'
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import About from './components/About';


function App() {

  return (
    <>
      <Header  />
      {/* <Home /> */}
      <Routes>
        <Route path='/' key='s' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
        <Route path='/contact' element={<Contact  /> } />
        <Route path='/about' element={<About  /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
