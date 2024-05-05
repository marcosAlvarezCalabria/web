import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/footer/footer";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Navbar from "./components/ui/navbar/navbar"
import EditProfile from "./pages/edit-profile/edit-profile";


function App() {


  return (
    <>

      <main className="flex-shrink-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile/>} />


        </Routes>
       
      </main>
          <Footer />

    </>

  )
}

export default App
