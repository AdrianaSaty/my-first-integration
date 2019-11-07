import React, { Component } from 'react'

class Search extends Component {
    state = {
    query: '',
    }

    inputSearch = (e) => {
        let { value } = e.target;
        this.props.handleSearchFood(value);   

        this.setState({
            search: value
        })

    }

    render() {
        return (
            <form>
                <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={(e) => this.inputSearch(e)}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

 export default Search;