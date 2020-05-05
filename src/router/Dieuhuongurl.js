import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import News from '../components/News';
import Home from '../components/Home';
import Newd from '../components/Newd';
import Contact from '../components/Contact';
class Dieuhuongurl extends Component {
    render() {
        return (
            
                <div>                
                    <Switch>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/tin">
                            <News />
                        </Route>
                        <Route exact path="/tin-tuc/:slug.:id.html" component={Newd}>                           
                        </Route>
                        <Route  path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
             
        );
    }
}

export default Dieuhuongurl;
