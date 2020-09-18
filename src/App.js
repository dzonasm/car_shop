import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import AddCar from './Views/AddCar';
import Product from './Views/Car';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>

        <Header />

        <div className='p-3'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/AddCar">
              <AddCar />
            </Route>

            <Route path="/cars/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>

    </div>
  );
}

export default App;