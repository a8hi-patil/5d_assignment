import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import AddMoment from "./components/AddMoment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="addmoment" element={<AddMoment />} />
          <Route exact path="/" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
