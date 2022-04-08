import { BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeesList from "./components/EmployeesList";
import NotFound from "./components/NotFound";

function App() {
  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<EmployeesList/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )  
}

export default App;