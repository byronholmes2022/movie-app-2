import "./App.css";
import Header from "./components/Header/Header";
import Home from "./views/Home";

function App() {
  // regular JS goes here
  const userName = "Bill";
  const loggedin = false;
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
