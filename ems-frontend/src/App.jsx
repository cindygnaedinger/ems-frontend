import "./App.css";
import ListEmployeeComponents from "./components/ListEmployeeComponents";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:3000*/}
          <Route path="/" element={<ListEmployeeComponents />}></Route>
          {/*http://localhost:3000/employees*/}
          <Route path="employees" element={<ListEmployeeComponents />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
