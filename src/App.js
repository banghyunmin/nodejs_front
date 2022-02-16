import './App.css';
import Home from './pages/Home.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Project from './pages/Project.js';
import Projects from './pages/Projects.js';
import ProjectCreate from './pages/ProjectCreate.js';
import ProjectUpdate from './pages/ProjectUpdate.js';
import ProjectDelete from './pages/ProjectDelete.js';

import ImageCreate from './pages/ImageCreate.js';
import ImageUpdate from './pages/ImageUpdate.js';

import ScheduleCreate from './pages/ScheduleCreate.js';
import ScheduleUpdate from './pages/ScheduleUpdate.js';

import Test from './pages/Test.js';
import Boards from './pages/Boards.js';
import Board from './pages/Board.js';
import BoardCreate from './pages/BoardCreate.js';

import Guides from './pages/Guides.js';
import Guide from './pages/Guide.js';
import GuideCreate from './pages/GuideCreate.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
	<Route exact path="/tests" element={<Test />} />

	<Route exact path="/" element={<Home />} />
	<Route exact path="/projects" element={<Projects />} />
	<Route exact path="/projects/:id/" element={<Project />} />
	<Route exact path="/createprojects/" element={<ProjectCreate />} />
	<Route exact path="/updateprojects/:id/" element={<ProjectUpdate />} />
	<Route exact path="/deleteprojects/:id/" element={<ProjectDelete />} />

	<Route exact path="/projects/:id/createimage/" element={<ImageCreate />} />
	<Route exact path="/projects/:id/updateimage/:img/" element={<ImageUpdate />} />

	<Route exact path="/projects/:id/createschedule/" element={<ScheduleCreate />} />
	<Route exact path="/projects/:id/updateschedule/:task" element={<ScheduleUpdate />} />

	<Route exact path="/boards" element={<Boards />} />
	<Route exact path="/boards/:id" element={<Board />} />
	<Route exact path="/createboard/" element={<BoardCreate />} />

	<Route exact path="/guides" element={<Guides />} />
	<Route exact path="/guides/:id" element={<Guide />} />
	<Route exact path="/createguide" element={<GuideCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
