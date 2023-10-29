import React from "react";
import Home from "./Two_crud/Home";
import Layout from "./Two_crud/Layout";
import LogReg from "./Two_crud/LogReg";
import Dashbord from "./Two_crud/Dashbord";
import Resetpass from "./Two_crud/Reset_pass";
import Navtab from "./Two_crud/Navtab_prac";
import SendPassReg from "./Two_crud/SendPassReg";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Layout />} >
            <Route exect index element={<Home />} />
            <Route exect path="contact" element={<Navtab />} />
            <Route exect path="logreg" element={<LogReg />} />
            <Route exect path="sendpassreg" element={<SendPassReg />} />
            <Route exect path="resetpass" element={<Resetpass />} />
            <Route exect path="/dashbord" element={<Dashbord />} />
            <Route exect path="*" element={<h1>Error 404 Page not foud !!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App