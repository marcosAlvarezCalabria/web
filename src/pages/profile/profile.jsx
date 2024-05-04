import PageLayout from "../../components/layouts/page-layout/page-layout";
import backgroundProfile from "../../assets/images/background-home.jpg"
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../services/api.services";
import { useNavigate } from "react-router-dom";



function Profile(){

    const { id } = useParams();
    const [ user, setUser] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        async function fetch() {
            try {
                const data = await getUserProfile(id);
                setUser(data.data)

            } catch {
                if (error.response.status == 404) {
                    navigate("/")
                }
            }
        } 
        fetch()
    },[])

    return(
        <PageLayout background={backgroundProfile}>
            <div  style={{ minHeight: "calc(100vh + 72px)" }}>
                <div className="container  row-columns">
                    <h1 className="col-">Profile</h1>
                <h1>{user.name}</h1>
                <h2>{user.birthDate}</h2>
                </div>
                


            </div>
        </PageLayout>
        
    )
}
export default Profile;