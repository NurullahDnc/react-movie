import React from 'react';
import serialize from 'form-serialize'; // serialize formdan degerleri almak icin


class AddMovie extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
        const newMovie = serialize(e.target, { hash: true }); // e.traget'ini alıyoruz formun, newMovie'e at
        // console.log(newMovie);
        this.props.onAddMovie(newMovie); /*props ile newMovie degiskenini parametre olarka   onAddMovie func. gonder */
        // this.props.history.push('/');  // yonelendirme ama  calısmıyor
    }
    
    render() {

        return (
            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled />
                    <div className="form-row d-flex">
                        <div className="form-group col-md-9">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />

                </form>
            </div>
        )


    }
}


export default AddMovie;

//! onChange()  = her degisklikte calısıyor