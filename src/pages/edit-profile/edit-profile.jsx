
import PageLayout from "../../components/layouts/page-layout/page-layout";

function EditProfile(){
    const handleSubmit = ()=>{

    }
    return(
        <PageLayout>
             <form onSubmit={handleSubmit}>
                <h1>Edit Profile</h1>
        <label htmlFor="name">Name</label>
        <input className="form-control" type="text" placeholder={user.name} />

        </form>
        </PageLayout>
       
    )
}

export default EditProfile;