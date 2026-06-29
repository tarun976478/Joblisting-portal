import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddJob from "./pages/AddJob";
import AllJobs from "./pages/AllJobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-job" element={<AddJob />} />
      <Route path="/jobs" element={<AllJobs />} />
    </Routes>
  );
}

export default App;