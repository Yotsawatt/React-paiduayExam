import React from 'react'
import Header from './component/Header'
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Home from './page/Home/Home'
import Pokemon from './page/Pokemon/Pokemon'
import Function1 from './page/Function1/Function1'
import Function2 from './page/Function2/Function2'
import Function3 from './page/Function3/Function3'

function App() {
  return (
    <div>
        
        <Router>
          <Header />
          <Switch>

            <Route path="/pokemon">
              <Pokemon />
            </Route>
            <Route path="/function1">
              <Function1 />
            </Route>
            <Route path="/function2">
              <Function2 />
            </Route>
            <Route path="/function3">
              <Function3 />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </Router>
    </div>
  )
}

export default App
