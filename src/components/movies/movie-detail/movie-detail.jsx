import { useParams } from "react-router-dom";
import PageLayout from "../../layouts/page-layout/page-layout";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../services/api.services";
    
function MovieDetail(){
const { id } = useParams();
const [movie, setMovie] = useState()
const [error, setError] = useState()
useEffect(() => {
    async function fetch() {
        try {
            const { data } = await getMovieDetails(id);
            setMovie(data);
        } catch {
            if(error?.response.status == 404 || error?.response.status == 500 ) {
                console.log(error)
                setError(error.response?.message)
            }
        }
    }
    fetch()
},[id])



console.log(id)
    return(
        <PageLayout>
            <p>{movie?.title}</p>
        </PageLayout>
        

    )
}
export default MovieDetail;