import { RepoIcon, StarIcon, RepoForkedIcon, HeartIcon } from '@primer/octicons-react'
import { Repo } from '../app.d'

const RepoItem = (repo: Repo) => {

    return (
        <div className="w-full p-4 text-sm border-b border-b-border-color">
            <div className='flex items-start'>
                <h1 className='flex items-center text-xl font-semibold'>
                    <a className='text-accent-color leading-tight hover:underline' href={repo.repoLink}>
                        <RepoIcon className='text-base inline text-text-color' />
                        <span className='ml-2 font-normal'>{repo.username} / </span>
                        {repo.repoName}
                    </a>
                </h1>
                <div className='ml-auto flex'>
                    {repo.sponsor && (
                        <div className='mr-2 border hover:bg-button-hover-bg hover:border-button-hover-border py-1 px-3 flex items-center bg-header-bg-color rounded-md border-border-color cursor-pointer'>
                            <HeartIcon className='text-pink-400 md:mr-2' />
                            <span className='hidden md:block text-[12px] font-semibold text-title-color'>Sponsor</span>
                        </div>
                    )}
                    <div className='border hover:bg-button-hover-bg hover:border-button-hover-border py-1 px-3 flex items-center bg-header-bg-color rounded-md border-border-color cursor-pointer'>
                        <StarIcon className='md:mr-2' />
                        <span className='hidden md:block text-[12px] font-semibold text-title-color'>Star</span>
                    </div>
                </div>
            </div>
            <p className='max-w-[70%]'>
                {repo.description}
            </p>
            <div className='md:flex items-end'>
                <div className='md:flex items-center mt-2'>
                    <div className='flex'>
                        <div className='mr-4 flex items-center'>
                            {repo.language}
                        </div>
                        <div className='mr-4 flex items-center hover:text-accent-color cursor-pointer'>
                            <StarIcon />&nbsp;{repo.starCount}
                        </div>
                        <div className='mr-4 flex items-center hover:text-accent-color cursor-pointer'>
                            <RepoForkedIcon />&nbsp;{repo.forkCount}
                        </div>
                    </div>
                    
                    <div className="flex mt-1 md:mt-0">
                        Built by&nbsp;
                        <div className='flex'>
                            {repo.users.map(user => (
                                <a key={user.profileUrl} className='mr-1' href={user.profileUrl}><img className="rounded-full" src={user.imgSrc} width="20" height="20" alt='' /></a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='mt-1 md:mt-0 text-[12px] ml-auto flex items-center hover:text-accent-color cursor-pointer'>
                    <StarIcon />&nbsp;{repo.todayStarCount} stars today
                </div>
            </div>
        </div>
    )
}

export default RepoItem