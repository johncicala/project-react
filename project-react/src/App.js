import "./styles/styles.css";
import Home from "./pages/Home";
import Dinner from "./pages/Dinner";
import Drinks from "./pages/Drinks";
import Job from "./pages/Job";
import Review from "./pages/Review";
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "dinner" element = {<Dinner />} />
            <Route path = "drinks" element = {<Drinks />} />
            <Route path = "job" element = {<Job />} />
            <Route path = "review" element = {<Review />} />
            <Route path = "contact" element = {<Contact />} />
        </Routes>
        <Footer />
      
      
    </div>
  );
}

export default App;