import React from 'react';

class SearchBar extends React.Component {

    // state
    state = {
        term: ''
    };

    // life cycle method
    componentDidMount() { }

    // Helper method
    onFormSubmit = (event) => {
        event.preventDefault() // prevents default browser submittal of forms input when user presses Enter

        this.props.onSubmit(this.state.term); //must use 'this' on class based props...not required on Functional Components
    };

    // Render method
    render() {
        return(
            <div className={"ui segment"}>
                <form onSubmit={ this.onFormSubmit } className={"ui form"}>
                    <div className={"field"}>
                        <label>Image Search</label>
                        <input
                            type={"text"}
                            value={ this.state.term }
                            onChange={ (e) => this.setState({term: e.target.value}) }
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;