import './App.css';
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
