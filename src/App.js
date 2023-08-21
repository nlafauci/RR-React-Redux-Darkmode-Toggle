import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
