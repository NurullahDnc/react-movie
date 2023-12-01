import React from 'react';
import { Link } from 'react-router-dom';


const MovieList = (props) => {

    const truncateOverView = (string, maxLength) => { // 2 tane parametre alıyor, string metin , maxLength uzunluk
        if (!string) return null; // stirng bos ise nul don
        if (string.length <= maxLength) return string; // string maxLength uzun ise string'i don
        return `${string.substring(0, maxLength)}...`; // string'e substring() ile 0 dan basla maxLength' ye kadar git sonuna ... koy.

    }

    return (
        <div className="row">

            {props.movies.map((movie) => ( //gelen verini almak icin kulanıyoruz, dongu, app.js geliyor  / veriler movie icerisinde

                <div className="col-lg-4" key={movie.id}> {/* her karta ozel ıd tanımlıyoruz */}
                    <div className="card mb-4 shadow-sm">
                        <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{truncateOverView(movie.overview, 100)}</p> {/*func. iki tane parametre gonderiyoruz 1. text 2. uzunluk*/}
                            <div className="d-flex justify-content-between align-items-center">
                                {/* props icerisinde propsDeletMovie func. card'ı secmesi icin parametre olarak movie*/}
                                <button type="button" onClick={(e) => props.propsDeletMovie(movie)} className="btn btn-md btn-outline-danger">Delete</button>
                               
                                <Link type="button"
                                    className='btn btn-md btn-outline-primary'
                                    to={`edit/${movie.id}`} // film'in id'sini gonderiyoruz
                                >Edit
                                </Link>

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
