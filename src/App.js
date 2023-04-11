import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ErrorPage from "./components/Errorpage";
import Header from "./components/Header";
import Blog from "./components/Blog";
import Instruction from "./components/Instruction";
import DjangoBlog from './Contributors/DjangoBlog';


import ReactPage from "./components/ReactPage";
import HtmlPage from "./components/HtmlPage";
import CssPage from "./components/CssPage";
import JsPage from "./components/JsPage";

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



        <Route path='/blog/html' element={<HtmlPage />} />
        <Route path='/blog/css' element={<CssPage />} />
        <Route path='/blog/javascript' element={<JsPage />} />
        <Route path='/blog/react' element={<ReactPage />} />
        <Route path='/blog/django' element={<DjangoBlog />} />



        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
