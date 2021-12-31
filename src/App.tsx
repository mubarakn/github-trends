import { Route, Switch } from 'react-router-dom'
import RepoPage from './RepoPage';
import DevelopersPage from './DevelopersPage';

function App() {
    
    return (
        <Switch>
            <Route path="/" exact>
                <RepoPage />
            </Route>
            <Route path="/developers">
                <DevelopersPage />
            </Route>
        </Switch>
    )
}

export default App;
