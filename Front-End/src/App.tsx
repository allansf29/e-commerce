import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="">
        <Navbar />
        <AppRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;