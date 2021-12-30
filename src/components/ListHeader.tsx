
const ListHeader = () => {

    return (
        <div className="md:flex items-center p-4 bg-header-bg-color text-sm">
            <div className="flex items-center font-semibold">
                <div className="px-4 py-2 border-t border-l border-b border-blue-600 bg-blue-600 text-active-link-color font-semibold rounded-tl-md rounded-bl">Repositories</div>
                <div className="px-4 py-2 border-t border-r border-b border-border-color cursor-pointer rounded-tr-md rounded-br-md text-title-color">Developers</div>
            </div>

            <div className="ml-auto mt-4 md:mt-0 md:flex items-center">
                <div className="mb-4 md:mb-0 relative dropdown hover:text-title-color mr-10">
                    <span className="cursor-pointer">Spoken Language: Any</span>
                </div>
                <div className="mb-4 md:mb-0 relative dropdown hover:text-title-color mr-10">
                    <span className="cursor-pointer">Language: Any</span>
                </div>
                <div className="mb-4 md:mb-0 relative dropdown hover:text-title-color mr-4">
                    <span className="cursor-pointer">Date Range: Today</span>
                </div>
            </div>
        </div>
    )
}

export default ListHeader