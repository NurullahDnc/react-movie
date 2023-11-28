import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },

            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },

            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            }
        ]
    }
 
    //delete islemi
    deletMovie = (movie) => {
        const newmovieList = this.state.movies.filter( /* flimleri filitreliyor sildikren sonra tekrar liste olsuturacak */
            m => m.id !== movie.id  /* movie id esit olmayanları getir */
        )
        this.setState({
            movies: newmovieList
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>

                <MovieList
                    movies={this.state.movies}   /* props olarak gonderme state icerisinde tanımlanan data'yı alıyor. */
                    propsDeletMovie= {this.deletMovie}
                    />
                    

            </div>
        )

    }


}

export default App;

//! filter()  = filter ediyor filitreliyor ?