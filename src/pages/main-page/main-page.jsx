import { useContext, useState } from "react";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import AuthContext from "../../contexts/auth.context";
import MoviesSection from "../../components/movies/movie-section/movie-section";
import FormFilter from "../../components/form-filter/form-filter";

function MainPage() {
    const { user } = useContext(AuthContext);
    const [selectedGenre, setSelectedGenre] = useState("");
    
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
    };
    const handlePlayVideo = () => {
        console.log("aqui desde mainpage")

    }

    return (
        <PageLayout>
            <h1>Main Page</h1>
            <FormFilter handleGenreChange={handleGenreChange} />
            <MoviesSection title= {`genres selected`} selectedGenre={selectedGenre} />
            <MoviesSection title= {"for you"} selectedGenre={user?.genre}/>
        </PageLayout>
    );
}

export default MainPage;




//* necesito cambiar genre ya que viene como string pero la query hay que hacerla con un numero