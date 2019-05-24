import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
// this has state/ and it is a class now that handles state
// const state = {
//     robots: robots,
//     searchfield: ''
// }
class App extends Component {
    constructor() {
        super()
        this.state = {
        robots: [],
        searchfield: ''
        }
    }

    componentDidMount() {
        // fetch is window method, comes with all browsers
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        // console.log(event.target.value);
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        // console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return !this.state.robots.length ?
            <h1>Loading...</h1> :
                (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    {/* <CardList robots={this.state.robots} /> */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }
}

export default App;