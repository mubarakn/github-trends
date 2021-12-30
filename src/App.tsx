import { BrowserRouter as Router, Route } from 'react-router-dom'
import RepoPage from './RepoPage';
import DevelopersPage from './DevelopersPage';

function App() {
    return (
        <Router>
            <Route path="/" exact>
                <RepoPage />
            </Route>
            <Route path="/developers">
                <DevelopersPage />
            </Route>
        </Router>
    )
}

export default App;
