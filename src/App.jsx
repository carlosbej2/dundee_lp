import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About_us from './components/About_us';

const App = () => (
  <div className='App'>
    <div className={`px-80 bg-[#B3E0F1] w-full overflow-hidden flex-center`}>
      <Router >
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About_us/>} />
        </Routes>
      </Router>
      </div>
  </div>
);

export default App