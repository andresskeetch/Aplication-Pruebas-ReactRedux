import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';


class Results extends Component {

    render () {
        const { results } = this.props;

        return (
            <Page 
                results={results} 
                goTo={(page) => this.props.history.push(page)}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results,

    }
}

export default withRouter(connect(mapStateToProps)(Results));