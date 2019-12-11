import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import MoviesContainer from './MoviesContainer';
import Spinner from './Spinner'

export class Landing extends Component {
    render() {
        const { loading } = this.props;
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    laoding: state.movies.laoding
})

export default connect(mapStateToProps)(Landing);
