import HomePage from '../HomePage';
import DetailPage from '../DetailPage';
import Header from '../Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header title="NYTimes Nonfiction Best Sellers"></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/details/:bookId' element={<DetailPage />}/>
        </Routes>    
      </BrowserRouter>
    </>
  );
}