import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import { UserProvider } from "./hooks/UserContext";
import Inventory from "./pages/Inventory";
import Sales from "./pages/Sales";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Sales />} />
          </Routes>
        </main>
      </UserProvider>
    </BrowserRouter>
  );
}
