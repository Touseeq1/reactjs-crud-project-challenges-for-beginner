// import Home from "./One_Crud/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Edit from "./One_Crud/Edit";
import Home from "./One_Crud/Home";
import View from "./One_Crud/View";
function App() {
  //touseeq haider
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/view/:id" element={<View />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
