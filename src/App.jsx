//Components
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Me from "./components/Me";
//import Books from "./components/Books";

export const App = () => {
  return (
    <div>
      <NavBar />
      <Board />
      <Me />
      <Footer />
    </div>
  );
};

export default App;
