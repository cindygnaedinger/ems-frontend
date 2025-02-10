import "./App.css";
import ListEmployeeComponents from "./components/ListEmployeeComponents";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter, Route, Routes } from "react-router";
import EmployeeComponent from "./components/EmployeeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/*http://localhost:3000*/}
          <Route path="/" element={<ListEmployeeComponents />}></Route>
          {/*http://localhost:3000/employees*/}
          <Route path="/employees" element={<ListEmployeeComponents />}></Route>
          {/*http://localhost:3000/add-employee*/}
          <Route path="/add-employee" element={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
