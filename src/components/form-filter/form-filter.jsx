import React, { useState } from 'react';

function FormFilter({ handleGenreChange }) {
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleGenreChange(selectedGenre);
    };

    const handleSelectChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="genre" className="form-label">Genre</label>
                <select id="genre" value={selectedGenre} onChange={handleSelectChange}>
                <option value="">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="animation">Animation</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="documentary">Documentary</option>
                    <option value="drama">Drama</option>
                    <option value="family">Family</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="mystery">Mystery</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="tv movie">TV Movie</option>
                    <option value="suspense">Suspense</option>
                    <option value="war">War</option>
                    <option value="western">Western</option>
                    
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default FormFilter;



/*function FormFilter({ handleSubmit }) {
    const [genre, setGenre] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleSubmit(genre);
    };

    const handleSelectChange = (e) => {
        setGenre(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="genre" className="form-label">Genre</label>
                <select id="genre" value={genre} onChange={handleSelectChange}>
                    <option value="">Select Genre</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    {/* Otros options aquí }
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default FormFilter;*/