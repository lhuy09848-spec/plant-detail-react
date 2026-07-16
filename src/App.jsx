import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeDetail from "./pages/EmployeeDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList />} />

        <Route
          path="/employee/create"
          element={<CreateEmployee />}
        />

        <Route
          path="/employee/:id"
          element={<EmployeeDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;