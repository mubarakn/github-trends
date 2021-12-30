import ListHeader from "./components/ListHeader"
import RepoItem from "./components/RepoItem"
import PageHeader from "./components/PageHeader"

const RepoPage = () => {

    return (
        <div className="min-h-screen w-full bg-[#22272E]">
            <PageHeader description="See what the GitHub community is most excited about today." />
            <div className="my-10 mx-auto w-11/12 lg:w-9/12 text-text-color border border-border-color border-b-0 overflow-hidden rounded-md">
                <ListHeader showSpokenLanguage={true} />
                <RepoItem sponsor />
                <RepoItem />
                <RepoItem />
                <RepoItem sponsor />
                <RepoItem />
                <RepoItem />
            </div>
        </div>
    )
}

export default RepoPage