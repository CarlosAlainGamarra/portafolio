//Components
import Index from "./Index";
import Wellcome from "./Wellcome";
import BookGrid from "./components/BookGrid";
import Cart from "./components/Cart";
import ModalBook from "./components/ModalBook";
import PopC from "./components/PopC";
import ReadBook from "./components/ReadBook";

//Router
import { Routes, Route } from "react-router-dom";


export const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Wellcome />} />
        <Route path='/main' element={<Index />} /> 
        <Route path='/book/:id' element={<ReadBook />} />
        <Route path='/modal' element={<ModalBook />} />
        <Route path='/popculture' element={<PopC />} />
        <Route path='/books' element={<BookGrid />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
