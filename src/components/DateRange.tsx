import { useEffect, useState } from 'react'
import { CheckIcon } from '@primer/octicons-react'
import { DateRangeProps, dateRanges } from '../app.d'

const DateRange = ({ dateRange, onDateRangeSelect }: DateRangeProps) => {
    const [dateRangeDropdown, toggleDateRangeDropdown] = useState(false)

    useEffect(() => {
        const listener = (event: MouseEvent) => {
            console.log('event firing')
            toggleDateRangeDropdown(false)
        }
        document.addEventListener('click', listener)
        
        return () => {
            document.removeEventListener('click', listener)
        }
    }, [])

    return (
        <div>
            <span onClick={e => {
                e.stopPropagation()
                toggleDateRangeDropdown(true)
            }} className="cursor-pointer dropdown hover:text-title-color">Date Range: {dateRange || 'Today'}</span>
            {dateRangeDropdown && (
                <div className='absolute w-[300px] top-[100%] text-title-color right-0 bg-header-bg-color rounded-md border border-border-color'>
                    <h5 className='font-semibold px-3 py-2 border-b border-border-color'>Adjust time span</h5>
                    {dateRanges.map(range => {
                        const isCurrent = range.value === dateRange
                        return (
                            <div key={range.value} onClick={() => onDateRangeSelect(range.value)} className={`px-3 py-2 hover:bg-blue-700 cursor-pointer ${isCurrent ? 'font-semibold' : ''}`}>
                                {isCurrent ? <CheckIcon className='mr-4' /> : null}
                                <span className={`${!isCurrent ? 'ml-8' : ''}`}>{range.label}</span>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default DateRange