
import { HeartIcon, FlameIcon, RepoIcon } from '@primer/octicons-react'

interface UserItemProps {
    sponsor?: boolean
}

const UserItem = ({ sponsor }: UserItemProps) => {

    return (
        <article className="flex items-start border-b border-border-color p-4">
            <a className='w-[16px]'>1</a>
            <img
                className="mx-3 rounded-full"
                src="https://avatars.githubusercontent.com/u/661450?s=96&v=4"
                width={48}
                height={48}
                alt="@arvidn"
                />
            {/* This container is for mobile devices */}
            <div className="flex-1 md:flex md:items-start">
                <div className='md:w-4/12'>
                    <h1 className='text-xl'>
                        <a href="https://google.com" className='text-accent-color font-semibold'>Arvind Norberg</a>
                    </h1>
                    <a className='hover:text-accent-color hover:underline' href="https://google.com">arvidn</a>
                </div>

                {/* This container is for tablet devices */}
                <div className="md:w-4/12 mt-2 md:mt-0 text-xs">
                    <span><FlameIcon className='text-orange-600' /> POPULAR REPO</span>
                    <h1 className='text-md'>
                        <RepoIcon className='' />
                        <a href="https://google.com" className='text-accent-color font-semibold text-base'> libtorrent</a>
                    </h1>
                    <p className='leading-normal'>哔哩漫游，解除B站客户端番剧区域限制的Xposed模块，并且提供其他小功能。An Xposed module that unblocks bangumi area limit of BILIBILI with miscellaneous features.</p>
                </div>

                <div className='ml-auto mt-2 md:mt-0 flex'>
                    {sponsor && (
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

export default UserItem