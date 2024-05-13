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

    return (
        <PageLayout>
            <h1>Main Page</h1>
            <FormFilter handleGenreChange={handleGenreChange} />
            <div><MoviesSection title= {`genres selected`} selectedGenre={selectedGenre} /></div>
            <div><MoviesSection title= {"for you"} selectedGenre={user?.genre}/></div>
        </PageLayout>
    );
}

export default MainPage;




