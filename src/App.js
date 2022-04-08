import { BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeesList from "./components/EmployeesList.js";
import NotFound from "./components/NotFound.js";
import AddEmployee from "./components/AddEmployee.js";

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<EmployeesList/>}/>
          <Route exact path="/add" element={<AddEmployee/>}/>
          <Route exact path="/employees/edit/:id" element={<AddEmployee/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )  
}

export default App;