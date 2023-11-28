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
            },
            {
                "id": 4,
                "name": "Rogue",
                "rating": 7.4,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
            },

            {
                "id": 5,
                "name": "Project Power",
                "rating": 6.7,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
            },

            {
                "id": 6,
                "name": "Superman",
                "rating": 7.6,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
            }
        ],
        searcQuery: ""  /*inputa girilen degeri buraya atıyoruz */
    }
 
    //delete islemi
    deletMovie = (movie) => {
        const newmovieList = this.state.movies.filter( /* flimleri filitreliyor sildikren sonra tekrar liste olsuturacak */
            m => m.id !== movie.id  /* movie id esit olmayanları getir */
        )
        // this.setState({  /*2.yontem filimler elimizde olmasa kulanırırz */
        //     movies: newmovieList  
        // })
        //guncel degerleri atma
        this.setState(state =>({    /*parametre olarak var olan satate alıyoruz, var olan state gunceliyoruz  */
            movies: newmovieList    /*olusturdugummuz newmovieList guncel halini movies'e atıyoruz */ 
        }))
    }

    //search islemi
    searcMovie =(event)=>{
        // console.log(event.target.value)
        this.setState({searcQuery: event.target.value})
    }

    render() {
        //filitreleme islemi
        let filterMovies = this.state.movies.filter(    
            (movie)=>{  /* filimler movie parametresinde  */
                return movie.name.toLocaleLowerCase().indexOf(this.state.searcQuery.toLocaleLowerCase()) !== -1     /*aranan deger filim'in iceriside var ise geriye, gon yoksa -1 bos don */ 
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar 
                            propsSearchMovie ={this.searcMovie} /*searcMovie func. , propsSearchMovie degiskenin icerisine at ve props ile gonder gonder*/
                        />
                    </div>
                </div>

                <MovieList
                    movies={filterMovies}   /* props olarak gonderme, filitrelenen ogeleri, ekranda gosterilecek kartlar*/
                        propsDeletMovie= {this.deletMovie}
                    />
            </div>
        )
    }
}

export default App;

//! filter()  = filter ediyor filitreliyor ?