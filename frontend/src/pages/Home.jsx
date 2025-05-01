import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";

function Home(){
    const [searchQuery, SetSearchQuery] = useState('');

    const movies = [
        {id: 1, tittle: "Akira", release_date:"1988"},
        {id: 2, tittle: "fairy tail", release_date:"2009"},
        {id: 3, tittle: "Soul Eater", release_date:"1488"},
    ]

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("--------")
    };

    return (
        <div className={"home"}>
            <form onSubmit={handleSearch} className={"search-form"}>
                <input
                    type="text"
                    placeholder={"Search for..."}
                    className={"search-input"}
                    value={searchQuery}
                    onChange={(e) => SetSearchQuery(e.target.value)}
                />
                <button type={"submit"} className={"search-button"}>Search</button>
            </form>
            <div className={"movies-grid"}>
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
}

export default Home;