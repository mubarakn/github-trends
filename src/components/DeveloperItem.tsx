
import { HeartIcon, FlameIcon, RepoIcon } from '@primer/octicons-react'
import { Developer } from '../app.d'

const DeveloperItem = ({ slNo, repoUrl, imgSrc, profileLink, fullName, username, repoName, repoDescription, sponsorLink }: Developer) => {

    return (
        <article className="flex items-start border-b border-border-color p-4">
            <a className='w-[16px]' href={`${repoUrl}`}>{slNo}</a>
            <img
                className="mx-3 rounded-full"
                src={imgSrc}
                width={48}
                height={48}
                alt="@arvidn"
                />
            {/* This container is for mobile devices */}
            <div className="flex-1 md:flex md:items-start">
                <div className='md:w-4/12'>
                    <h1 className='text-xl'>
                        <a href={profileLink} className='text-accent-color font-semibold'>{fullName}</a>
                    </h1>
                    <a className='hover:text-accent-color hover:underline' href={profileLink}>{username}</a>
                </div>

                {/* This container is for tablet devices */}
                <div className="md:w-4/12 mt-2 md:mt-0 text-xs">
                    <span><FlameIcon className='text-orange-600' /> POPULAR REPO</span>
                    <h1 className='text-md my-1'>
                        <RepoIcon />
                        <a href={repoUrl} className='text-accent-color font-semibold text-base'> {repoName}</a>
                    </h1>
                    <p className='leading-normal'>{repoDescription}</p>
                </div>

                <div className='ml-auto mt-2 md:mt-0 flex'>
                    {sponsorLink && (
                        <div className='mr-2 border hover:bg-button-hover-bg hover:border-button-hover-border py-1 px-3 flex items-center bg-header-bg-color rounded-md border-border-color cursor-pointer'>
                            <HeartIcon className='text-pink-400 mr-2' />
                            <span className='text-[12px] font-semibold text-title-color'>Sponsor</span>
                        </div>
                    )}
                    <div className='border hover:bg-button-hover-bg hover:border-button-hover-border py-1 px-3 flex items-center bg-header-bg-color rounded-md border-border-color cursor-pointer'>
                        <span className='text-[12px] font-semibold text-title-color'>Follow</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default DeveloperItem