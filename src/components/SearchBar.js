import React from 'react';

class SearchBar extends React.Component {

    state= {    /*setstate olsuturuldu */
        searcQuery:""   
    }

    handleFormSubmit =(e)=>{
        e.preventDefault()

    }

    render() {

        return  (
            <form onSubmit={this.handleFormSubmit}>
                <div className='form-row mb-5 mt-4'>
                    <div className='col-12'>
                        <input 
                        onChange={(event)=> this.setState({searcQuery: event.target.value})}    // input valuesini  serstate ile state'ye ekliyor
                        value={this.state.searcQuery}  /*inputtaki v alue state icerisine atldı, state'de ki deger input'un valuesine atıldı */
                        type='text' className='form-control' placeholder='search a movies'></input>
                    </div>
                </div>
            </form>
        )

        
    }
}


export default SearchBar;