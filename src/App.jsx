//Components
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import Author from "./components/Author";


export const App = () => {
  return (
    <div>
      <NavBar />
      <Board />
      <BookCard />
      <Author />
      <Footer />
    </div>
  );
};

export default App;
