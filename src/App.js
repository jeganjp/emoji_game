import React from 'react';
import Ingame from './Ingame';
import emojibg from './images/90479.jpg';
import { Route, Switch } from 'react-router';
import Level1 from './Level1';
import Level2 from './Level2';
function App() {
  return (
    <Switch>
    <Route exact path='/'>
    <div style={{display:'flex',
    flexDirection:'column',
    backgroundImage:`url(${emojibg})`,
    justifyContent:'center',
    justifyItems:'center',
    alignItems:'center',
    backgroundSize:'cover'}}>
      <h1 >Welcome to emoji-game</h1>
    <Ingame />
    </div>
    </Route>  
    <Route exact path='/start'>
      <Level1 />
    </Route>
    <Route>
      <Level2/>
    </Route>
      </Switch>
  );
}

export default App;
