import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainContent from './components/MainContent';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='layout'>
        <Header />
        <Routes>
          <Route path='/' element={<MainContent />} />
        </Routes>
      </div>
    </Router> 
  )
}

export default App;
