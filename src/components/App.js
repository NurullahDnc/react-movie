import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';


class App extends React.Component {

    state = {
        movies: [],
        searcQuery: ""  /*inputa girilen degeri buraya atıyoruz */
    }

    //  olusturudugumuz .json dosyasına istek atma
    async componentDidMount(){
        const baseURL ="http://localhost:3002/movies"   // datayı olsuturdugumuz json dosyasından istek atarak aldık
        const response = await fetch(baseURL);
        console.log(response);
        const data =await response.json();
        this.setState({movies: data});  // data icerisindeki veri movies'e atıldı
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