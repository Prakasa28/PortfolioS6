import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Content from "./Components/Content";

function App() {
  return (
    <Router>
      <Header />
      <Content />
      {/* <Footer /> */}
    </Router>
  );
}
export default App;
