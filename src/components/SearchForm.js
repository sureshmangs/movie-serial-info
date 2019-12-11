import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../actions/saerchActions';

export class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value);
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fab fa-searchengin"></i> Search for a movie or TV series
          </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="searchText"
                            placeholder="Search Movies, TV Series ..."
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-dark btn-bg mt-3">
                            Search
            </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapSateToProps = state => ({
    text: state.movies.text
})

export default connect(mapSateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);
