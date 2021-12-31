import { useLocation, useHistory } from 'react-router-dom'
import { useQuery, UseQueryResult } from 'react-query'
import ListHeader from "./components/ListHeader"
import PageHeader from "./components/PageHeader"
import UserItem from "./components/DeveloperItem"
import developer from './services/developers'
import useParamQuery from './effects/useParamQuery'
import { Developer, dateRanges } from './app.d'

const DevelopersPage = () => {
    const history = useHistory()
    const location = useLocation() 
    const queryObject = useParamQuery()
    let dateRange = Object.keys(queryObject).length ? queryObject['range'] : 'daily'

    const rangeDescription = dateRanges.find(d => d.value === dateRange)?.label

    const {status, error, data}: UseQueryResult<Developer[], Error> = useQuery([location.pathname.replace('/', ''), dateRange], async (context) => {
        const result = await developer.getAll({ dateRange: context.queryKey[1] })
        return result.data.sort((a: Developer, b: Developer) => parseInt(a.slNo) - parseInt(b.slNo) )
    })

    let list: JSX.Element | null = null

    if (status === 'loading') {
        list = <div>Loading...</div>
    }
    else if (status === 'error') {
        list = <div>{error}</div>
    }
    else if (status === 'success') {
        list = <>{data?.map((dev) => <UserItem key={`dev-${dev.username}`} {...dev} />)}</>
    }

    return (
        <div className="min-h-screen w-full bg-[#22272E]">
            <PageHeader description={`These are the developers building the hot tools ${rangeDescription}.`} />
            <div className="my-10 mx-auto w-11/12 lg:w-9/12 text-text-color border border-border-color border-b-0 overflow-hidden rounded-md">
                <ListHeader showSpokenLanguage={true} dateRange={dateRange} onDateRangeSelect={range => history.push(`${location.pathname}?range=${range}`)} />
                {list}
            </div>
        </div>
    )
}

export default DevelopersPage