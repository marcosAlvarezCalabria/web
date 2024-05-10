import PageLayout from "../../components/layouts/page-layout/page-layout";
import backgroundProfile from "../../assets/images/background-home.jpg"
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../services/api.services";
import { useNavigate,NavLink } from "react-router-dom";





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
        <PageLayout background={backgroundProfile}>
            <div  >
                <div style={{ background: "grey" }} className="container  row-columns">
                    <h1 className="">Profile</h1>
                   <div className="row">
                    <div className="col-md-2">
                        <h3 className="row-column-2">{user?.name}</h3>
                        <h3 className="row-column-2">{user?.genre}</h3>
                        <h3>{user.favorites}</h3>

                        <NavLink to={"/profile/edit"}>Edit</NavLink>
                    </div>
                    <div className="col-md-6">     
                    
                    </div>
                    
                   </div>

                   

                </div>

            </div>

        </PageLayout>

    )
}
export default Profile;