import PageLayout from "../../components/layouts/page-layout/page-layout";
import backgroundProfile from "../../assets/images/cine1.jpg"
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../services/api.services";
import { useNavigate,NavLink } from "react-router-dom";
import "./profile.css";
import UserAvatar from "../../components/ui/user-avatar/user-avatar";




function Profile() {

    const { id } = useParams();
    const [user, setUser] = useState({});
   
   console.log(user.favorites)
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
    }, [])

    

    return (
        <PageLayout className="d-flex align-items-center pb-5" background={backgroundProfile}>
            <div  className="container">
                <div className="div1">
                    <h1 className="tittle">Profile</h1>
                </div>
                <div className=" div2 d-flex ">
                    <div className="div3 w-30 "><UserAvatar width="200px" fontSize= "8em"height="200px" /></div>
                    <div className="div4">
                         <div className="div5">{user.name}</div>
                         <div className="div6">div6</div>
                         
                    </div>
                   

                </div>
               
<NavLink to={"/profile/edit"}>Edit</NavLink>
            </div>

        </PageLayout>

    )
}
export default Profile;