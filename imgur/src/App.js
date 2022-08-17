import "./App.css";
import Navbar from "./components/navbar";
import ImageCard from "./components/imageCard";
import DropDown from "./components/dropdown"
function App() {
  return (
    <div className="App">
      <Navbar />
      <DropDown />
      <ImageCard />
    </div>
  );
}

export default App;
