import React, { useEffect, useState } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox'
import ErrorBoundry from "../Components/ErrorBoundry";
import './App.css';
import Scroll from '../Components/Scroll';


function App() {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)
useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {setRobots(users)});
},[count])

const onSearchChange = (event) => {
    setSearchfield(event.target.value)
}

const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
})
return !robots.length ? 
    <h1>Loading</h1> :
(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click Me!</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );
    }


export default App