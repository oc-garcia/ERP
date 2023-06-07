import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Nav from "./components/Nav/Nav";
import { UserProvider } from "./hooks/UserContext";
import Sales from "./pages/Sales/Sales";
import Catalogue from "./pages/Catalogue/Catalogue";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </main>
      </UserProvider>
    </BrowserRouter>
  );
}
