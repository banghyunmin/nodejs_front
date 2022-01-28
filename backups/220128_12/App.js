import './App.css';
import Home from './pages/Home.js';
import Update from './pages/Update.js';
import Update_inputs from './pages/Update_inputs.js';
import Create from './pages/Create.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route exact path="/" element={<Home />} />
	<Route exact path="/update" element={<Update />} />
	<Route exact path="/update/:id" element={
		<div>
		  <Update />
		  <Update_inputs />
		</div>
	} />
	<Route exact path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
