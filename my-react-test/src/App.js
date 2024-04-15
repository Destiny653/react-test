import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Form from './pages/Form';
import Detail from './pages/Detail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
