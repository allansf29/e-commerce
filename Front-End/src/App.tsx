import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <main className="">
        <Navbar />
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;