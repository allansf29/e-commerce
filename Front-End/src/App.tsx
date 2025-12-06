import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routers";
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="">
        <Navbar />
        <AppRoutes />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
