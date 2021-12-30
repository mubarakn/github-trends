import { useEffect } from 'react'
import PageHeader from "./components/PageHeader";
import ListHeader from "./components/ListHeader";
import RepoItem from './components/RepoItem';
// import githubTrends from 'github-trends-api';
import axios from 'axios';
import UserItem from './components/UserItem';

function App() {

    useEffect(() => {
        axios.get('https://github.com/trending?since=daily')
        .then(response => {
            console.log(response.data)
        })
        /* githubTrends()
        .then(result => { console.log(result) })
        .catch(error => { console.error(error) }) */
    }, [])

  return (
    <div className="min-h-screen w-full bg-[#22272E]">
        <PageHeader />
        <div className="my-10 mx-auto w-11/12 lg:w-9/12 text-text-color border border-border-color border-b-0 overflow-hidden rounded-md">
            <ListHeader />
            <UserItem sponsor />
            <RepoItem sponsor />
            <RepoItem />
            <RepoItem />
            <RepoItem sponsor />
            <RepoItem />
            <RepoItem />
        </div>
    </div>
  );
}

export default App;
