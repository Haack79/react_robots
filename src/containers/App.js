import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
// this has state/ and it is a class now that handles state
// const state = {
//     robots: [],
//     searchfield: ''
// }
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
    return {
        // below is coming from the reducer, state from reducer
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    // this state is no longer needed here because it is passed down as props. 
    // constructor() {
    //     super()
    //     this.state = { robots: [], searchfield: '' this is now handled by store in redux state tree. 

    componentDidMount() {
        this.props.onRequestRobots(); 
        // THIS Now handled in actions
        // fetch is window method, comes with all browsers
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}));
    }
// Don't Need this onSearchChange cause it's being passed in as props and don't need to declare it as method of App
    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value })
    //     // console.log(event.target.value);
    //     // const filteredRobots = this.state.robots.filter(robot => {
    //     //     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    //     // })
    //     // console.log(filteredRobots);
    // }

    render() {
        // const { robots } = this.state;
        // isntead of getting searchField from state of this component, it now comes as prop from redux store.
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading...</h1> :
                (
                <div className='tc'>
                    <h1 className='f1'>Robo Friends</h1>
                    <SearchBox searchChange={onSearchChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);