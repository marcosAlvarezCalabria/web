import { createContext,useContext, useEffect, useState } from "react";
import { getUserProfile, login, logout } from "../services/api.services";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    

    async function fetchProfile(){
        try{
            const response = await getUserProfile();
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }

    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) fetchProfile()
            else setUser(null)
    },[]);

    async function doLogin(data) {
        await login(data);
        fetchProfile();
      }
    
      function doLogout() {
        setUser(null);
        logout();
        navigate("/login");
      }
    
      const value = {
        user,
        doLogin,
        doLogout,
      };
   
    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);

export default AuthContext;