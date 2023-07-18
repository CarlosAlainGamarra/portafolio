//Components
import { Index } from "./Index";
import ModalBook from "./components/ModalBook";
import PopC from "./components/PopC";
import ReadBook from "./components/ReadBook";

//Router
import { Routes, Route } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/book/:id' element={<ReadBook />} />
        <Route path='/modal' element={<ModalBook />} />
        <Route path='/popculture' element={<PopC />} />
      </Routes>
    </div>
  );
};

export default App;
