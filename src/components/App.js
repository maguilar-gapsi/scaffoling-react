/** Components **/
import Home from './Home/Home';
/** Router **/
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;