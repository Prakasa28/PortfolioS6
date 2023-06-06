import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroupProject from "./Pages/GroupProject";
import Index from "./Pages/index";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/project" element={<GroupProject />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </Router>
  );
}
export default App;
