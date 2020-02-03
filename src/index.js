import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = { lat: null, errorMessage: "This isn't working" };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    };
    

    render() {
    //    if (this.state.errorMessage && !this.state.lat) {
    //        return <div>Error: {this.state.errorMessage}</div>
       
       
       if (!this.state.errorMessage && this.state.lat) {
           return <SeasonDisplay lat={this.state.lat} />
       }

       return <Spinner/>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
