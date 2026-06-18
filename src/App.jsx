import StudentManagement from "./components/StudentManagement";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <StudentManagement />
    </ThemeProvider>
  );
}

export default App;