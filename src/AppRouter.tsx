import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav/Nav";
import { UserProvider } from "./hooks/UserContext";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </UserProvider>
    </BrowserRouter>
  );
}
