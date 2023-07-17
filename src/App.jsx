//Components
import { Index } from "./Index";
import ModalBook from "./components/ModalBook";
import ReadBook from "./components/ReadBook";

//Router
import { Routes, Route } from "react-router-dom";


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/book' element={<ReadBook />} />
        <Route path='/modal' element={<ModalBook />} />
      </Routes>
    </div>
  );
};

export default App;
