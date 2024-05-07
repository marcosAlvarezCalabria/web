import { useEffect, useContext, useState } from "react";
import PageLayout from "../../components/layouts/page-layout/page-layout";
import AuthContext from "../../contexts/auth.context";
import MoviesSection from "../../components/movies/movie-section/movie-section";




function MainPage() {
    const { user } = useContext(AuthContext);
   


        return (
            <PageLayout>

                <h1>Main Page</h1>
                < MoviesSection/>
                
            </PageLayout>
        );

    } 



export default MainPage;



//* necesito cambiar genre ya que viene como string pero la query hay que hacerla con un numero