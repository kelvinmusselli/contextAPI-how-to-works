import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Home } from './pages/Home';
import { Welcome } from './pages/Welcome';
import UserContextProvider from './contexts/userContext'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App;
