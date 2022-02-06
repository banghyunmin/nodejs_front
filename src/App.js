import './App.css';
import Home from './pages/Home.js';
import Update from './pages/Update.js';
import Create from './pages/Create.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Project from './pages/Project.js';
import ProjectCreate from './pages/ProjectCreate.js';
import ProjectUpdate from './pages/ProjectUpdate.js';
import ProjectDelete from './pages/ProjectDelete.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route exact path="/" element={<Home />} />
	<Route exact path="/projects/:id" element={<Project />} />
	<Route exact path="/createprojects" element={<ProjectCreate />} />
	<Route path="/updateprojects/:id" element={<ProjectUpdate />} />
	<Route path="/deleteprojects/:id" element={<ProjectDelete />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
