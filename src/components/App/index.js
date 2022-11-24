import HomePage from '../HomePage';
import DetailPage from '../DetailPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/details/:bookId' element={<DetailPage />}/>
      </Routes>    
    </BrowserRouter>
  );
}