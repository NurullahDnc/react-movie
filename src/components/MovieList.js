import React from 'react';


const MovieList = (props)=> {
        return (
            <div className="row">

                {props.movies.map((movie) => ( //gelen verini almak icin kulanıyoruz, dongu, app.js geliyor  / veriler movie icerisinde

                    <div className="col-lg-4" key={movie.id}> {/* her karta ozel ıd tanımlıyoruz */}
                        <div className="card mb-4 shadow-sm">
                            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movie.name}</h5>
                                <p className="card-text">{movie.overview}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    {/* props icerisinde propsDeletMovie func. card'ı secmesi icin parametre olarak movie*/}
                                    <button type="button" onClick={(e)=> props.propsDeletMovie(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h2><span className="badge badge-info bg-primary text-white">{movie.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
 
            </div>
        )
    }

export default MovieList;


//! map() = bir dizi öğe üzerinde döngü yapmak ve her bir öğe için belirli bir işlem yapmak için kullanılır
//! props  = ozelik. comparent arasında veri alma 
//? statede setstate() metodu kulararak degisiklik yapıyoruz
