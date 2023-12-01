import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import axios from 'axios';  //axios istek atma
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //router import etme


class App extends React.Component {

    state = {
        movies: [], /*resimleri buraya atıyoruz burdan islem yapıyoruz */
        searcQuery: ""  /*inputa girilen degeri buraya atıyoruz */
    }


    // //* 1.yontem fect ile  olusturudugumuz .json dosyasına istek atma
    // async componentDidMount() {
    //     const baseURL = "http://localhost:3002/movies";   // datayı olsuturdugumuz json dosyasından, istek atarak aldındı - fake rest api
    //     const response = await fetch(baseURL);
    //     console.log(response);
    //     const data = await response.json();
    //     this.setState({ movies: data });  // data icerisindeki veri movies'e atıldı
    // }


    //*  2. yontem axios ile istek atma
    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");  // istek atıyoruz 
        // console.log(response)
        this.setState({ movies: response.data });
    }


    // //* 1 api olmadan delete islemi
    // deletMovie = (movie) => {
    //     const newmovieList = this.state.movies.filter( /* flimleri filitreliyor sildikren sonra tekrar liste olsuturacak */
    //         m => m.id !== movie.id  /* movie id esit olmayanları getir */
    //     )
    //     //guncel degerleri atma
    //     this.setState(state => ({    /*parametre olarak var olan satate alıyoruz, var olan state gunceliyoruz  */
    //         movies: newmovieList    /*olusturdugummuz newmovieList guncel halini movies'e atıyoruz */
    //     }))
    // }


    // //* 2 fect api ile delete islemi
    // deletMovie = async (movie) => {
    //     const baseURL = `http://localhost:3002/movies/${movie.id}` // movie.id gore silme islemi yapıyor 
    //     await fetch(baseURL, {
    //         method: "DELETE" // apı'de delete islemi yapıyor
    //     })

    //     const newmovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     this.setState(state => ({
    //         movies: newmovieList
    //     }))
    // }

    //* 3 axios ile delete islemi
    deletMovie = async (movie) => {
        axios.delete(`http://localhost:3002/movies/${movie.id}`);

        const newmovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState(state => ({
            movies: newmovieList
        }))
    }


    //*search islemi
    searcMovie = (event) => {
        // console.log(event.target.value)
        this.setState({ searcQuery: event.target.value })
    }

    //* add islemi
    addMovie = async (movie) => {
        axios.post(`http://localhost:3002/movies/`, movie) // 2. parametreyi de 3 alıyor
        this.setState(state => ({  // movies'i gunceliyoruz
            movies: state.movies.concat([movie])    // aray oldugu icin concat metodu ile ekleme yaptık
        }))


    }

    render() {
        //filitreleme islemi, sonrası ekranda gosterme
        let filterMovies = this.state.movies.filter(
            (movie) => {  /* filimler movie parametresinde  */
                return movie.name.toLocaleLowerCase().indexOf(this.state.searcQuery.toLocaleLowerCase()) !== -1     /*aranan deger filim'in iceriside var ise geriye, gon yoksa -1 bos don */
            }
        ).sort((a, b) => { //* eklenen filmler uste gelecek, karsılastırma
            return a.id < b.id ? 1 : a.id > b.id ? -1 : 0  //b.id buyuk ise 2. don, b.id kucuk ise 1. don, 0 da id esit oldgunu gosteriri
        });

        return (
            <Router>    {/*kapsayıcı gorevi goruyor */}
                <div className="container">
                    <Routes>
                        <Route  // gosterilecek yapıları boluyor 
                            path="/"   /* link veriyoruz */
                            element={(  /*geriye dondermek icin render gorevi goruyor? */
                                <React.Fragment>    {/*faazladan div kulanmamak icin, uste render oldugu icin tek div altında topluyoruz*/}
                                    <div className="row mt-4">
                                        <SearchBar
                                            propsSearchMovie={this.searcMovie} /*searcMovie func. , propsSearchMovie degiskenin icerisine at ve props ile gonder gonder*/
                                        />
                                    </div>

                                    <MovieList
                                        movies={filterMovies}
                                        propsDeletMovie={this.deletMovie}
                                    />
                                </React.Fragment>
                            )}
                        />

                        <Route
                            path="/add"
                            element={(
                                <AddMovie
                                    //onAddMovie func'ının movie parametresini burda addMovie func. movie parametresi olarak gonder
                                    onAddMovie={(movie) => { this.addMovie(movie) }

                                    }
                                />
                            )}
                        />

                        <Route path="/edit/:id" Component={EditMovie} />  {/*id'i dinamik olarak gonderiyoruz. */}

                    </Routes>
                </div>
            </Router>
        );

    }
}

export default App;

//! filter()  = filter ediyor filitreliyor ?

//* router yoneldirici 

//? <Router>  == kapsayıcı gorevi goruyor
//? <Route path='/' render={() => ( )</Route>   == poute ile kodu boluyoruz hangısı hangisi ile gosterilecek/ path link / render geriye render ediyoruz
//? <Routes>  == ?
//? </React.Fragment>  == jsx kodalrı tek kapsayıcı icrisinde olmalı, fazladan div kulanmak yerine bu yapıyı kulanıyoruz.



