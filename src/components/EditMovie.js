import axios from 'axios';
import React from 'react';


class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    //id gore veri getiriyor, verileri inputa atıyor
    async componentDidMount() {

        const id = window.location.pathname.replace("/edit/", "")  // hangi filmi yakalıyacagımızı belirliyoruz
        // console.log(id)

        const response = await axios.get(`http://localhost:3002/movies/${id}`)
        // console.log(response.data)

        const movie = response.data;  /*veriyi movie nin icerisine atık */

        this.setState({  /*setstate metodu ile state guncelle */
            name: movie.name,   /*movie.name'i al, name ile guncelle */
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })

    }
    // inputta degisklik yapmak icin yazıldı
    onInputChange = (e) => {
        // console.log(e.target.name); /*degisiklik yapılan inputun name sini donuyor */
        // console.log(e.target.value); /*degisklik yapılan inputun valuesini donuyor */   

        this.setState({
            [e.target.name]: e.target.value  /*verinin valuesini al, setstate icerisindeki name at */
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()


        /*  altaki kodun uzun yolu 

            const name = this.state.name;
            const rating = this.state.rating;
            const overview = this.state.overview;
            const imageURL = this.state.imageURL; */


        const { name, rating, overview, imageURL } = this.state;  /*state icideki degerleri soldaki degiskenlere atıldı */

        const id = window.location.pathname.replace("/edit/", "")  // hangi filmi yakalıyacagımızı belirliyoruz id alma

        const updatedMovie = { /*guncellenen degerler burda  */
            name,
            rating,
            overview,
            imageURL
        }
        this.props.onEditMovie(id, updatedMovie) //!onEditMovie (degisken adı gibi) parametreleri id, updateMovie'i props olarak gonderiyor 
    }

    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit The Form To Update A Movie.." disabled />
                    <div className="form-row d-flex">
                        <div className="form-group col-md-9">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}   /*state deki degerleri value'e ile inputlara atıldı  */
                                onChange={this.onInputChange} />   {/*input icerisindeki degeri degisitmek icin func. verdik */}
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating"
                                value={this.state.rating}
                                onChange={this.onInputChange} />

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL"
                                value={this.state.imageURL}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" value={this.state.overview} onChange={this.onInputChange} rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Edit" />

                </form>
            </div>
        )


    }
}


export default EditMovie;

//! onChange()  = her degisklikte calısıyor