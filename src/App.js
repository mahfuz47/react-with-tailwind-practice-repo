import "./App.css";
import Header from "./components/Header/Header";
import Pricing from "./components/Price/Pricing";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-5xl">Welcome to my pricing club</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
