import { useLocation, Link } from 'react-router-dom'
import LinkButtonLocation from '../enums/LinkButtonLocation'

const LinkButton = ({ location, path, title }: { location: LinkButtonLocation, path: string, title: string }) => {
    const urlLocation = useLocation()

    let roundClassName = location === LinkButtonLocation.LEFT ? 'border-r-0 rounded-tl-md rounded-bl-md' : 'border-l-0 rounded-tr-md rounded-br-md'
    let colorClassName = urlLocation.pathname === path ? 'border-blue-600 bg-blue-600 text-active-link-color' : 'border-border-color text-title-color cursor-pointer'
    return <Link to={path} className={`px-4 py-2 border ${roundClassName} ${colorClassName} font-semibold`}>{title}</Link>
    
}

export default LinkButton