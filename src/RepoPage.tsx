import { useHistory, useLocation } from 'react-router-dom'
import { useQuery, UseQueryResult } from 'react-query'
import ListHeader from "./components/ListHeader"
import RepoItem from "./components/RepoItem"
import PageHeader from "./components/PageHeader"
import repository from './services/repositories'
import useParamQuery from './effects/useParamQuery'
import { Repo, dateRanges } from './app.d'

const RepoPage = () => {
    const history = useHistory()
    const location = useLocation()
    const queryObject = useParamQuery()
    let dateRange = Object.keys(queryObject).length ? queryObject['range'] : 'daily'

    const rangeDescription = dateRanges.find(d => d.value === dateRange)?.label

    const {status, error, data}: UseQueryResult<Repo[], Error> = useQuery([location.pathname.replace('/', ''), dateRange], async (context) => {
        const result = await repository.getAll({ dateRange: context.queryKey[1] })
        return result.data
    })
    
    let list: JSX.Element | null = null

    if (status === 'loading') {
        list = <div>Loading...</div>
    }
    else if (status === 'error') {
        list = <div>{error}</div>
    }
    else if (status === 'success') {
        list = <>{data?.map((repo) => (
            <RepoItem
                key={`Repo-${repo.repoLink}`}
                sponsor={Math.random() > 0.5}
                {...repo}
                />
        ))}</>
    }

    return (
        <div className="min-h-screen w-full bg-[#22272E]">
            <PageHeader description={`See what the GitHub community is most excited about ${rangeDescription}.`} />
            <div className="my-10 mx-auto w-11/12 lg:w-9/12 text-text-color border border-border-color border-b-0 overflow-hidden rounded-md">
                <ListHeader showSpokenLanguage={true} dateRange={dateRange} onDateRangeSelect={range => history.push(`${location.pathname}?range=${range}`)} />
                {list}    
            </div>
        </div>
    )
}

export default RepoPage