import react from "react";
import Navbar from "./components/Navabar";
import Title from "./components/Title";
import Panel from "./components/Panel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Title />
      <Panel />
      <Footer />
    </div>
  );
};

export default App;
