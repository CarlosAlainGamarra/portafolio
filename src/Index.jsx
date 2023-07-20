//Components
import NavBar from "./components/NavBar";
import Board from "./components/Board";
import Footer from "./components/Footer";
import BookCard from "./components/BookCard";
import Author from "./components/Author";
import Books from "./components/Books";


export const Index = () => {
  return (
    <div>
      <NavBar />
      <Board />
      <BookCard />
      <Books />
      <Author />
      <Footer />
    </div>
  );
};

export default Index
