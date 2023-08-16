import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ErrorPage from "./components/Errorpage";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Instruction from "./components/Instruction";


import GitBlog from './blogs/GitBlog';
import SassBlog from './blogs/SassBlog';

import './styles/main.scss'
import './styles/code.scss'
import './styles/blog.scss'
import './styles/home.scss'
import './styles/contributor.scss'
import './styles/steps.scss'



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/instruction' element={<Instruction />} />
        <Route path='/blog/git-github' element={<GitBlog />} />
        <Route path='/blog/sass' element={<SassBlog />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
