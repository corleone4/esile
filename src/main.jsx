import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Candle from './pages/Candle.jsx';
import Books from './pages/Books.jsx';
import Eye from './pages/Eye.jsx';
import Angel from './pages/Angel.jsx';
import Fairy from "./pages/Fairy.jsx";
import Demon from "./pages/Demon.jsx";
import Sticks from "./pages/Sticks.jsx";
import Corleone from "./pages/Corleone.jsx";
import Lake from "./pages/Lake.jsx";
import Answer from "./pages/Answer.jsx";
import Girl from "./pages/Girl.jsx";
import Final from "./pages/Final.jsx";

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/candles" element={<Candle />} />
      <Route path="/books" element={<Books />} />
      <Route path="/eye" element={<Eye />} />
      <Route path="/angel" element={<Angel />} />
      <Route path="/fairy" element={<Fairy />} />
      <Route path="/demon" element={<Demon />} />
      <Route path="/sticks" element={<Sticks />} />
      <Route path="/corleone" element={<Corleone />} />
      <Route path="/answer" element={<Answer />} />
      <Route path="/lake" element={<Lake />} />
      <Route path="/girl" element={<Girl />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  </BrowserRouter>
)
