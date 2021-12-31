import LinkButton from './LinkButton'
import { ListHeaderProps, LinkButtonLocation } from '../app.d'
import DateRange from './DateRange'

const ListHeader = ({ showSpokenLanguage, spokenLanguage, language, dateRange, onDateRangeSelect }: ListHeaderProps) => {
    

    return (
        <div className="md:flex items-center p-4 bg-header-bg-color text-sm">
            <div className="flex items-center font-semibold">
                <LinkButton location={LinkButtonLocation.LEFT} path='/' title='Repositories' />
                <LinkButton location={LinkButtonLocation.RIGHT} path='/developers' title='Developers' />
            </div>

            <div className="ml-auto mt-4 md:mt-0 md:flex items-center">
                { showSpokenLanguage && (
                    <div className="mb-4 md:mb-0 relative dropdown hover:text-title-color mr-10">
                        <span className="cursor-pointer">Spoken Language: {spokenLanguage || 'Any'}</span>
                    </div>
                )}
                <div className="mb-4 md:mb-0 relative dropdown hover:text-title-color mr-10">
                    <span className="cursor-pointer">Language: {language || 'Any'}</span>
                </div>
                <div className="mb-4 md:mb-0 relative mr-4">
                    <DateRange dateRange={dateRange} onDateRangeSelect={onDateRangeSelect} />
                </div>
            </div>
        </div>
    )
}

export default ListHeader