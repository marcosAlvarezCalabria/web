import { Route, Routes } from "react-router-dom";
import Footer from "./components/ui/footer/footer";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Navbar from "./components/ui/navbar/navbar"


function App() {
 

  return (
    <>
   <Navbar/>
    <main className="flex-shrink-0">
    
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
       
    </main>
    
   <Footer/>
    </>
  
  )
}

export default App
