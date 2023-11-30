import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5 d-flex'>
                    <div className='col-10'> 
                        <input
                            onChange={this.props.propsSearchMovie}    // propdan gelen degeri calıstır, event parametresi gonderiyor
                            type='text'
                            className='form-control'
                            placeholder='search a movies'>

                        </input>
                    </div>

                    <div className="col-2">
                        <button type="button" 
                                className="btn btn-md btn-danger"
                                style={{float:'right'}}>Add Movie
                        </button>
                    </div>
                </div>
            </form>
        )


    }
}


export default SearchBar;

//! onChange()  = her degisklikte calısıyor