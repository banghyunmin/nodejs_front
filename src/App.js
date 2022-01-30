import './App.css';
import Home from './pages/Home.js';
import Update from './pages/Update.js';
import Create from './pages/Create.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route exact path="/" element={<Home />} />
	<Route path="/update/:id" element={<Update />} />
	<Route exact path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
