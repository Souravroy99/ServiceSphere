import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Logout } from "./pages/Logout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Error } from "./pages/Error.jsx";
import AdminLayout from "./components/Layouts/Admin-Layout.jsx";
import { AdminUsers } from "./pages/Admin-Users.jsx";
import { AdminContacts } from "./pages/Admin-Contacts.jsx";
import AdminUpdate from "./pages/Admin-Update.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Main Page Layout */}
        <div className="page-container">
          <Navbar />

          {/* Content area */}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/service" element={<Service />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />

              {/* Nested Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="users" element={<AdminUsers />} />
                <Route path="contacts" element={<AdminContacts />} />
                <Route path="users/:id/edit" element={<AdminUpdate />} />
              </Route>

              {/* Wildcard Route */}
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

          {/* Footer always at bottom */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;