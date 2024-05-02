import PageLayout from "../../components/layouts/page-layout/page-layout";
import("./register.css")

function Register() {
    return (
        <PageLayout>

            <div className=" h-100 d-flex justify-content-center align-items-center row" style={{ minHeight: "calc(100vh + 72px)" }}>
                <form className="form-container pt-4 col-8 col-md-6 col-lg-4">
                    {/*Name  */}
                    <div className="form-outline 2">
                        <input type="text" className="form-control" />
                        <label className="form-label">Name</label>
                    </div>
                    {/*username  */}
                    <div className="form-outline 2">
                        <input type="text" className="form-control" />
                        <label className="form-label">Username</label>
                    </div>
                    {/*email  */}
                    <div className="form-outline 2">
                        <input type="email" className="form-control" />
                        <label className="form-label">Email address</label>
                    </div>
                    {/*birthDate  */}
                    <div className="form-outline 2">
                        <input type="date" className="form-control" />
                        <label className="form-label"> BirthDate</label>
                    </div>

                    {/*password*/}
                    <div className="form-outline 2">
                        <input type="password" id="form1Example2" className="form-control" />
                        <label className="form-label" for="form1Example2">Password</label>
                    </div>
                    <div className="form-outline 2">
                        <select className="form-select mb-2" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                    </div>
                        
                    


                    <button data-mdb-ripple-init type="submit" className="btn col-4 btn-danger btn-block mb-2">Sign in</button>
                </form>

            </div>








        </PageLayout>

    )
}

export default Register;