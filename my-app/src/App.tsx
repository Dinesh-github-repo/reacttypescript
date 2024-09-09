import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import PersonDetails from './PersonDetails';
import Teams from './Teams';
import LogLevel from './LogLevel';
import Parent from './Parent';
import Child from './Child';
import Singin from './Singin';
import SignOut from './SignOut';
import Counter from './Counter';
import Content from './Context/Content';

function App() {
  const IPL = [{team:'MI', color:'Yellow'},{team:'MI', color:'Yellow'},{team:'MI', color:'Yellow'}]
  const Details = {
    FName: "Virat",
    LName:"Kohli",
    Age:35
  }
 return (
    <div className="App">
    {/* <Home name="Dinesh" age={21} isActive={false}/>
    <PersonDetails Details={Details} /> */}
    {/* <Teams IPL={IPL}/>
    <LogLevel status='Error' /> */}
    {/* <Parent children={<Child />}/>  */}
    {/* <Singin /> */}
    {/* {<SignOut />} */}
    {/* <Counter /> */}
    <Content />
    </div>
  );
}

export default App;
