import { useForm } from "react-hook-form";
import { createComment } from "../../services/api.services";

function CommentsForm({movie ,handleComments}) {
    const { register, handleSubmit, formState: { errors} } = useForm();


   async function handleDataSubmit(data){
    const movieId = movie.id
       try {
        await createComment(data,movieId)
        handleComments();
       } catch (error) {
        console.error(error)
       }}

    

    return (
        <section>
            <form onSubmit={handleSubmit(handleDataSubmit)}>
                <div className="container my-5 py-5 text-body">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-6">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="d-flex flex-start w-100">

                                        <div className="w-100">
                                            <h5>Add a comment</h5>
                                            <div data-mdb-input-init className="form-outline">
                                                <label htmlFor="rating"></label>
                                                <input className={`form-control ${errors.rating ? "is-invalid" : ""}`} {...register("rating",  {required: "Ratings is required"})} type="number" name="rating" min={1} max={5} />

                                                <textarea {...register("text", {required: "Comments is required"})} htmlFor="text"  className={`form-control ${errors.comments ? "is-invalid" : ""}`} rows="4"></textarea>
                                                <label className="form-label" htmlFor="text">comment your experince</label>
                                            </div>
                                            <div className="d-flex justify-content-between mt-3">
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-danger">
                                                    Send 
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default CommentsForm