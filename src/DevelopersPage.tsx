import ListHeader from "./components/ListHeader"
import PageHeader from "./components/PageHeader"
import UserItem from "./components/UserItem"

const DevelopersPage = () => {

    return (
        <div className="min-h-screen w-full bg-[#22272E]">
            <PageHeader description="These are the developers building the hot tools today." />
            <div className="my-10 mx-auto w-11/12 lg:w-9/12 text-text-color border border-border-color border-b-0 overflow-hidden rounded-md">
                <ListHeader />
                <UserItem sponsor />
                <UserItem />
                <UserItem />
                <UserItem sponsor />
                <UserItem />
                <UserItem />
            </div>
        </div>
    )
}

export default DevelopersPage