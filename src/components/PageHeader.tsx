const PageHeader = ({ description }: { description: string }) => {

    return (
        <div className="bg-header-bg-color py-10 border-b border-border-color">
            <div className="w-fit mx-auto p-4 text-center">
                <h1 className="text-title-color font-semibold text-3xl">Trending</h1>
                <p className="text-text-color mt-2">{description}</p>
            </div>
        </div>
    )
}

export default PageHeader