import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5 d-flex'>
                    <div className='col-10 m'>
                        <input
                            onChange={this.props.propsSearchMovie}    // propdan gelen degeri calıstır, event parametresi gonderiyor
                            type='text'
                            className='form-control'
                            placeholder='search a movies'>

                        </input>
                    </div>

                    <div className="col-2">
                        <Link  // btn tagını link vermek icin Link  tagına cevirdik  
                            to="/add"
                            type="button"
                            className="btn btn-md btn-danger"
                            style={{ float: 'right' }}>Add Movie
                        </Link>
                    </div>
                </div>
            </form>
        )


    }
}


export default SearchBar;

//! onChange()  = her degisklikte calısıyor