import React from 'react';

class SearchBar extends React.Component {

    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5 mt-4'>
                    <div className='col-12'>
                        <input
                            onChange={this.props.propsSearchMovie}    // propdan gelen degeri calıstır, event parametresi gonderiyor
                            type='text'
                            className='form-control'
                            placeholder='search a movies'>

                        </input>
                    </div>
                </div>
            </form>
        )


    }
}


export default SearchBar;

//! onChange()  = her degisklikte calısıyor