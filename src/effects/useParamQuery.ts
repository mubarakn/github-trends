import { useLocation } from 'react-router-dom'

interface Dict{
    [key: string]: string
}

const useParamQuery = () => {
    const location = useLocation() 
    let queryObject:Dict = {}
    if (location.search) {
        const query = location.search.replace('?', '')
        const queries = query.split('&')
        queryObject = queries.reduce((acc: Dict, item) => {
            const q = item.split('=') as [string, string]
            acc[q[0]] = q[1]
            return acc
        }, {})
    }
    return queryObject
}

export default useParamQuery